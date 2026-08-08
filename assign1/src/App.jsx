// import React from 'react'
// import Likes from './components/Likes'
// import Q1Counter from './components/Q1counter'
// import StudentCard from './components/StudentCard'
// import Q3CounterSplit from './components/Q3CounterSplit'
// import Q4Badge from './components/Q4Badge'
// import NavBar from './class1/NavBar'
// import {Route,Routes} from 'react-router-dom'
// import Home from './class1/Home1'
// import About from './class1/About'
// import Contact from './class1/Contact'
// import ProductList from './class3/ProductList'
// import ProductD from './class3/ProductD'

// const App = () => {
//   return (
//     <div>
      {/* <h1>Question1</h1>
      <Q1Counter />
      <h1>Question2</h1>
     <StudentCard/>
     <h1>Question3</h1>
     <Q3CounterSplit/>
     <h1>Question4</h1>
     <Q4Badge/> */}
//      <NavBar/>
    //  <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path='/About' element={<About/>}></Route>
    //   <Route path='/list' element={<ProductList/>}></Route>
    //   <Route path='/p/:id' element={<ProductD/>}></Route>
    //  </Routes>
//      {/* <Likes/> */}
     
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import A from './class4/A'
// import Context from './class4/Context'

// const App = () => {
//   return (
//     <div>
//       <A></A>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Todo3 from './assignment2/Todo3'
// import Todo2 from './assignment2/Todo2'
// import Todos from './assignment2/Todos'
// import Todo4 from './assignment2/Todo4'
// const App = () => {
//   return (
//     <div>
//       {/* <Todos/> */}
//       {/* <Todo2/> */}
//       {/* <Todo3/> */}
//       <Todo4/>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Todos5 from './assignment2/Todos5'
// import Todo7 from './assignment2/todo7'
// // import Reducer from './class5/Reducer'
// // import Tdo from './class5/Tdo'

// const App = () => {
//   return (
//     <div>
//       {/* <Reducer/>
//       <Tdo/> */}
//       <Todo7/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// // import NavBar from './class1/NavBar'
// import { Route, Routes } from 'react-router-dom'
// // import Home from './class1/Home1'
// // import About from './class1/About'
// // import ProductList from './class3/ProductList'
// // import Services from './class1/Services'
// import Navigation from './assignment3/Navigation'
// import Home from './assignment3/Home'
// import Project from './assignment3/Project'
// import Resume from './assignment3/Resume'
// const App = () => {
//   return (
//     <div>
//       {/* <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/About' element={<About/>}></Route>
//         <Route path='/List' element={<ProductList/>}></Route>
//         <Route path='/Service' element={<Services/>}></Route>
//       </Routes> */}
//       <Navigation/>
//         <Routes>
//           <Route path='/' element={<Home/>} ></Route>
//           <Route path='/projects' element={<Project/>}></Route>
//           <Route path='/resume' element={<Resume/>}></Route>
//         </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react';
import Navbar from './class1/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home1 from './class1/Home1';
// import ProductList from './class3/ProductList';
// import ProductD from './class3/ProductD'; // 1. Added import
import StudentD from './class3/StudentD';
import StudentList from './class3/StudentList';
import NotFound from './class3/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        {/* <Route path="/product" element={<ProductList />} />
        {/* 2. Added dynamic route matching /p/:id */}
        {/* <Route path="/p/:id" element={<ProductD />} /> */} 
        <Route path='/students' element={<StudentList/>}></Route>
        <Route path='/s/:id' element={<StudentD/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
