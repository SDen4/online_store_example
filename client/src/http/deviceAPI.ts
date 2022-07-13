import { $host } from '.';

export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');
  return data;
};

export const fetchOneDevice = async (id: any) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
