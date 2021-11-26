export default function toContactApi(contact) {
  return {
    name: contact.name,
    address: contact.address.address,
    cep: contact.address.cep,
    city: contact.address.city,
    district: contact.address.district,
    email: contact.email,
    phone_number: contact.phoneNumber,
    residence_number: contact.address.residenceNumber,
    states_id: contact.address.state.id,
  };
}
