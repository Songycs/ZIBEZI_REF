import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', toggleNav);
    return () => {
      window.removeEventListener('resize', toggleNav);
    };
  }, []);
  const toggleNav = () => {
    if (window.innerWidth < 768) setToggle(true);
    else setToggle(false);
  };

  return !toggle ? (
    <div className="nav-container">
      <div className="logo-container">
        <Link href="/"></Link>
      </div>
      {/* <div className="navi-container">
        {this.props.store.user.isAdmin() ? (
          <Link
            to="/admin/home"
            className="nav-element"
            activeclassname="highlight"
          >
            <span>Admin</span>
          </Link>
        ) : (
          <div />
        )} */}
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/notice">
        <span>Notice</span>
      </Link>
      <Link href="/story">
        <span>Story</span>
      </Link>
      <Link href="/shop">
        <span>Gallery</span>
      </Link>
      <Link href="/shop/pagination">
        <span>Shop</span>
      </Link>
    </div>
  ) : (
    <div></div>
  );
}

// {
//   /* {
//                                 this.props.store.user.isLogined? (

//                                 <Fragment>
//                                    <Link to="/mypage" className = "nav-element"
// activeclassname="highlight"><span>Mypage</span></Link>

//                                     <div className = "nav-element pointer"
//  onClick={this.handleLogOut}><span>Logout</span></div>
//                                </Fragment>

//                                 )
//                                 :
//                                 ( <Fragment>
//   <div className = "nav-element pointer" onClick={()=>this.setState({loginModal:true})}>
// <span>Sign in</span></div>
//                     <LoginForm isOpen = {this.state.loginModal}
// callback={()=>{this.setState({loginModal:false})}}/>
//                                     </Fragment>
//                                 )
//                             } */
// }
