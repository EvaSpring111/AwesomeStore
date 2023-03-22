export interface DeviceDescription {
  additionalFeatures: string | undefined,
  android: {
      os: string | undefined,
      ui: string | undefined,
  } | undefined,
  availability: string[] | undefined,
  battery: {
      standbyTime: string,
      talkTime: string,
      type: string,
  },
  camera: {
      features: Array<string> | null,
      primary: string | null,
  },
  connectivity: {
      bluetooth: string,
      cell: string | null,
      gps: boolean,
      infrared: boolean,
      wifi: boolean,
  },
  description: string
  display: {
      screenResolution: string,
      screenSize: string,
      touchScreen: boolean
  },
  hardware: {
      accelerometer: boolean,
      audioJack: string,
      cpu: string,
      fmRadio: boolean,
      physicalKeyboard: boolean,
      usb: string,
  },
  id: string,
  images: string[],
  name: string,
  sizeAndWeight: {
      dimensions: string[],
      weight: string,
  },
  storage: {
      flash: string,
      ram: string,
  }
}
