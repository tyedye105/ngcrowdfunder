export class Project {
  constructor (public title: string, public description: string,  public goal: number, public creator: string, public id: number, public category: string, public raised: number = 0) { }
}
