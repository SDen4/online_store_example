import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  private _types: { id: number; name: string }[];
  private _brands: { id: number; name: string }[];
  private _devices: {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
  }[];

  constructor() {
    this._types = [
      { id: 1, name: 'smartphones' },
      { id: 2, name: 'phones' },
      { id: 3, name: 'washing mashines' },
      { id: 4, name: 'washing mashines2 test' },
    ];
    this._brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsung' },
    ];
    this._devices = [
      {
        id: 1,
        name: '12 pro',
        price: 120000,
        rating: 0,
        img: '1656253022090.jpg',
      },
      {
        id: 2,
        name: '13 pro',
        price: 130000,
        rating: 0,
        img: '1656253906322.jpg',
      },
      {
        id: 3,
        name: 'galaxy 1',
        price: 99999,
        rating: 0,
        img: '1656253936008.jpg',
      },
      {
        id: 4,
        name: 'air pods',
        price: 19999,
        rating: 0,
        img: '1656253966208.jpg',
      },
    ];
    makeAutoObservable(this);
  }

  // actions
  setTypes(types: { id: number; name: string }[]) {
    this._types = types;
  }
  setBrands(brands: { id: number; name: string }[]) {
    this._brands = brands;
  }
  setDevices(
    devices: {
      id: number;
      name: string;
      price: number;
      rating: number;
      img: string;
    }[],
  ) {
    this._devices = devices;
  }

  // getters (computed functions)
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}