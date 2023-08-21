import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required!!"],
    unique: [true, "Email already exists!!"],
  },
  image: {
    type: String,
  },
});

/*if we were working with always "running" and always "on" regular express server then we would do:
 const User = model("User", UserSchema);
  export default User;

*/

/*But in next js the api route is dynamically created and ran only when it is called,so we need to
make a check before we create a user

The "models" object is provided by the Mongoose library and stores all the registered models.
If a model named "User" already exits in the "models" object , it assigns that existing model
to the "User" variable.

This prevents the redefining of the model and ensures that the existing model is reused

If a model named "User" does not exist in the "models" object, the "model" function from Mongoose
is called to create a new model

The newly created model is then assigned to the "User" varaible.

*/

const User = models.User || model("User", UserSchema);
export default User;
