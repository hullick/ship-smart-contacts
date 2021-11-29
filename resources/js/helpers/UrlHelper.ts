export default abstract class UrlHelper {
  static getPublicFolder(): string {
    return UrlHelper.getEnvVariableOrError(process.env.MIX_APP_PUBLIC_FOLDER);
  }

  static getAvatarsFolder(): string {
    return `${UrlHelper.getPublicFolder()}/avatars`;
  }

  static getAvatarFolder(avatar: string): string {
    return `${UrlHelper.getAvatarsFolder()}/${avatar}`;
  }

  static getStateApi(): string {
    return UrlHelper.getEnvVariableOrError(process.env.MIX_APP_STATE_API);
  }

  static getContactApi(): string {
    return UrlHelper.getEnvVariableOrError(process.env.MIX_APP_STATE_API);
  }

  static getContactDetailPage(contactId: string): string {
    return `${UrlHelper.getEnvVariableOrError(
      process.env.MIX_APP_PAGE_CONTACT_DETAIL
    )}/${contactId}`;
  }

  static getEditContactPage(contactId: string): string {
    return `${UrlHelper.getEnvVariableOrError(process.env.MIX_APP_PAGE_CONTACT_EDIT)}/${contactId}`;
  }

  static getCreateContactPage(): string {
    return `${UrlHelper.getEnvVariableOrError(process.env.MIX_APP_PAGE_CONTACT_CREATE)}`;
  }

  static getListContactsPage(): string {
    return `${UrlHelper.getEnvVariableOrError(process.env.MIX_APP_PAGE_CONTACT_LIST)}`;
  }

  private static getEnvVariableOrError(envVariable: string | undefined): string {
    if (envVariable) {
      return envVariable;
    } else {
      throw new Error();
    }
  }
}
