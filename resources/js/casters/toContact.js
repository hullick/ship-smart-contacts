import toAddress from "./toAddress";

export default function toContact(contactApi) {
  return {
    id: contactApi.id ?? undefined,
    name: contactApi.name,
    email: contactApi.email,
    phoneNumber: contactApi.phone_number,
    avatarFilename: contactApi.avatar_filename,
    address: contactApi.address ? toAddress(contactApi.address) : undefined,
  };
}
