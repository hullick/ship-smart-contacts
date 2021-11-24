export interface Contact {
  name: string;
  phoneNumber: string;
  email?: string;
}

//Workaround for warnings
export const Contact = undefined;
