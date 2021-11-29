export default function toAddress(addressApi) {
  return {
    address: addressApi.address,
    cep: addressApi.cep,
    city: addressApi.city,
    state: addressApi.state,
    district: addressApi.district,
    residenceNumber: addressApi.residence_number,
  };
}
