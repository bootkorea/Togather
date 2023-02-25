const express = require('express');
const router = express.Router();

const authRouter = require('./users/auth');
const loginRouter = require('./users/login');
const logoutRouter = require('./users/logout');
const registerRouter = require('./users/register');
const postPageRouter = require('./users/postpage');
const bookmarkRouter = require('./users/bookmark');
const kakaoRouter = require('./users/kakao/kakaoMiddle');
// 해당 주소로 가기위한 미들웨어 장착

router.use('/users/auth', authRouter);
router.use('/users/login', loginRouter);
router.use('/users/logout', logoutRouter);
router.use('/users/register', registerRouter);
router.use('/users/postpage', postPageRouter);
router.use('/users/bookmark', bookmarkRouter);
router.use('/users/kakao', kakaoRouter);
//각 부분마다 라우터 사용

router.get('/', (req, res) => {
  res.send('This is api.js');
});
//미드웨어 동작 확인용

module.exports = router;
