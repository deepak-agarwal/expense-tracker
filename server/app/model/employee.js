const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  credit: {
    type: Number,
    default: 0
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department"
  },
  outstanding: {
    type: Number,
    default: 0
  },
  reimurshed: {
    type: Number,
    default: 0
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 10
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  tokens: [
    {
      token: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  role:{
      type:String,
      default:'employee'
  }
});

employeeSchema.pre("save", function(next) {
  const employee = this;
  if (employee.isNew) {
    bcrypt.genSalt(10).then(salt => {
      bcrypt.hash(employee.password, salt).then(encryptedPassword => {
        employee.password = encryptedPassword;
        next();
      });
    });
  } else {
    next();
  }
});

employeeSchema.statics.findByCredentials = function(email, password) {
  const Employee = this;
  return Employee.findOne({ email })
    .then(employee => {
      if (employee) {
        return bcrypt.compare(password, employee.password).then(result => {
          if (result) return Promise.resolve(employee);
          else return Promise.reject("Invalid Password");
        });
      } else {
        return Promise.reject("Invalid E-mail");
      }
    })
    .catch(err => Promise.reject(err));
};

employeeSchema.methods.generateToken = function() {
    const employee = this;
    const tokenData = {
      username: employee.username,
      _id: employee._id,
      createdAt: Number(new Date()),
      role: employee.role
    };
    const token = jwt.sign(tokenData, "ydsa6$*FNF)EQR$H*$Q");
    employee.tokens.push({ token });
    return employee
      .save()
      .then(employee => {
        return Promise.resolve(token);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
  
  employeeSchema.statics.findByToken = function(token) {
    const Employee = this;
    let tokenData;
    try {
      tokenData = jwt.verify(token, "ydsa6$*FNF)EQR$H*$Q");
    } catch (err) {
      return Promise.reject(err);
    }
    return Employee.findOne({ _id: tokenData._id, "tokens.token": token });
  };

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;