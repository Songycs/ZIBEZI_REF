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
        <Link href="/">
          <a>dd</a>
        </Link>
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
        <a>Home</a>
      </Link>
      <Link href="/notice">
        <a>Notice</a>
      </Link>
      <Link href="/story">
        <a>Story</a>
      </Link>
      <Link href="/shop">
        <a>Gallery</a>
      </Link>
      <Link href="/shop/pagination">
        <a>Shop</a>
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
