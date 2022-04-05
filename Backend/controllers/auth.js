const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
//const crypto = require('crypto')

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}))

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
    //errorMessage: req.flash('error')
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false,
    //errorMessage: req.flash('error')
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  console.log(password)
  User.findOne({email:email})
  .then(user => {
    if (!user) {
      //req.flash('error', 'Invalid email or password.')
      return res.redirect('/login')
    }
    console.log(user.password)
    bcrypt.compare(password, user.password)
  .then(doMatch => {
    console.log(doMatch)
    if(doMatch)
    {
      req.session.isLoggedIn = true
      req.session.user = user
      return req.session.save(err => {
        console.log(err)
        res.redirect('/')
      })
    }
    res.redirect('/login')
  }) 
  .catch(err => console.log(err));
})
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  User.findOne({email:email})
  .then(userDoc => {
    if (userDoc) {
      return res.redirect('/signup')
    }
    return bcrypt
    .hash(password,12)
    .then((hashedPassword) => {
    const user = new User({
      email: email,
      password: hashedPassword,
      cart: {items: []}
    })
    return user.save()
  })
    .then((result) => {
      res.redirect('/login')
      return transporter.sendMail({
        // to: email,
        to: 'torma.erik@students.jedlik.eu',
        from: 'torma.erik@students.jedlik.eu',
        subject: 'Signup succeeded!',
        html: '<h1>You successfully signed uo!</h1>'
      })
    }).
    catch(err => {
      console.log(err)
    })
  }).
  catch(err => {
    console.log(err)
  })
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
  })
  // req.flash('error', 'Password does not match.')
  res.redirect('/');
};

// exports.getReset = (req,res,next) => {
//   res.render('auth/reset', {
//     path: "reset",
//     pageTitle: "Reset Password",
//     errorMessage: req.flash("error")
//   })
// }

// exports.postReset = (req, res, next) => {
//   crypto.randomBytes(32, (err, buffer) => {
//     if (err) {
//       console.table(err)
//       return res.redirect('/reset')
//     }
//     const token = buffer.toString('hex')
//     User.findOne({email: req.body.email})
//       .then(user => {
//         if (!user) {
//           req.flash('error','No account with that email was found.')
//           return res.redirect('/reset')
//         }
//         user.resetToken = token
//         user.resetTokenExpiration = Date.now() + 3600000
//         return user.save()
//       })
//       .then(result => {
//         res.redirect('/')
//         transporter.sendMail({
//           to: 'raboczki.erik@students.jedlik.eu',
//           from: 'raboczki.erik@students.jedlik.eu',
//           subject: 'Password reset',
//           html: `<a href="http://localhost:3000/reset/${token}">Click here<a/>`
//         })
//       })
//       .catch (err => {
//         consoke.table(err)
//       })
//   })
// }

// exports.getNewPassword = (req,res,next) => {
//   const token = req.params.token
//   User.findOne({
//     resetToken: token,
//     resetTokenExpiration: {$gt: Date.now()}
//   }).then (user => {
//     res.render('auth/new-password', {
//       path: "new-password",
//       pageTitle: "New Password",
//       errorMessage: req.flash("error"),
//       userId: user._id.toString(),
//       passwordToken: token
//     })
//   }).catch(err => { console.table(err)})
// }

// exports.postNewPassword = (req,res,next) => {
//   const newPassword = req.body.password
//   const userId = req.body.userId
//   const passwordToken = req.body.passwordToken
//   let resetUser

//   User.findOne({
//     resetToken: passwordToken,
//     resetTokenExpiration: {$gt: Date.now(),
//     _id: userId }
//   })
//   .then (user => {
//     resetUser = user
//     return bcrypt.hash(newPassword,12)
//   })
//   .then(hashedPassword => {
//     resetUser.password =  hashedPassword
//     resetUser.resetToken = undefined
//     resetUser.resetTokenExpiration = undefined
//     return resetUser.save()
//   })
//   .then(result => {
//     res.redirect('/login')
//   })
//   .catch(err => {
//     console.table(err)
//   })

// }
