import { OptionId } from "./question.model";

export class UserModel {
  id: string | null;
  name: string | null;
  avatarURL: string | null;
  answers: {[key: string]: OptionId };
  questions: string[];

  constructor(user: UserModel) {
    const { id, name, avatarURL, answers, questions } = user
    this.id = id
    this.name = name
    this.avatarURL = avatarURL
    this.answers = answers
    this.questions = questions
  }
}
