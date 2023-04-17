import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			
			<li>
              <Link to="/Home">
			  <button type="button" class="btn btn-success">Home</button>
              </Link>
            </li>
            <br />
			<li>
              <Link to="/about">
			  <button type="button" class="btn btn-success">About</button>
              </Link>
            </li>
            <br />
			<li>
              <Link to="/contact">
			  <button type="button" class="btn btn-success">contact</button>
			  </Link>
            </li>
			
			

			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
        </div>
				<Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
		<Route path="/Home"    element={<Home/>}/>
      </Routes>
			</div>
		</AppProvider>

        

	);
};


export default App;