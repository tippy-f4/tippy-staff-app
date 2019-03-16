import dayjs from 'dayjs';

export class CardVM {
  constructor(
    readonly cardId: string,
    readonly employeeName: string,
    readonly employeePictureUrl: string,
    readonly message: string,
    readonly points: number,
    readonly isPraisable: boolean,
    readonly createdAt: Date,
  ) {}

  toFormattedCreatedAt(): string {
    return dayjs(this.createdAt).format('M/D HH:MM')
  }
}