export class CardVM {
  constructor(
    readonly employeeName: string,
    readonly employeePictureUrl: string,
    readonly createdAt: Date,
    readonly message: string
  ) {}
}