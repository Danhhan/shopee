import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import { logout } from 'src/pages/Auth/Auth.slice'
import Popover from '../Popover/Popover'
import * as S from './NavBar.style'
export default function NavBar() {
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)

  const { activePopover, showPopover, hidePopover } = usePopover()

  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  return (
    <S.NavBar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://static.antoree.com/user_4/profile_pictures/img_1530178262_5b34aad602a944.98709245.png" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to="">Đơn mua</S.UserLink>
                <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.NavBar>
  )
}
