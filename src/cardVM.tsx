import dayjs from 'dayjs';

export class CardVM {
  constructor(
    readonly employeeName: string,
    readonly employeePictureUrl: string,
    readonly createdAt: Date,
    readonly message: string
  ) {}

  toFormattedCreatedAt(): string {
    return dayjs(this.createdAt).format('M/D HH:MM')
  }
}