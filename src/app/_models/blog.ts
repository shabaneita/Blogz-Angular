import { User } from "./user";

export class Blog {
  constructor(
    public title: string, public author: User, public body: string = "", public photos: string[] = [],
    public tags: string[] = [], public likers: User[] = []
  ) { }
}

/*
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  body: {
    type: String,
  },
  photos: [String],
  tags: [String],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}
*/
