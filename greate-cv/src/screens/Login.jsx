import React from 'react';
import { useTitle } from '../hooks/useTitle';
import { BoxBorder } from '../components/ui/BoxBorder';
import { Link } from 'react-router-dom';

export const Login = () => {
	useTitle('Login');
	return (
		<div className="login">
			<BoxBorder>
				<div className="login__container">
					<h1 className="txt-2xl login__title">Login</h1>

					<form className="form">
						<div className="form__input-box">
							<label className="form__input-label">Email</label>
							<input
								className="form__input txt-sm"
								placeholder="Type ur email"
							/>
							<span className="form__input-error active text-xs">
								Something wrong!
							</span>
						</div>

						<div className="form__input-box">
							<label className="form__input-label">Password</label>
							<input
								className="form__input txt-sm"
								placeholder="Type ur password"
							/>
							<span className="form__input-error active text-xs">
								Something wrong!
							</span>
						</div>

						<button
							type="submit"
							className="gray-btn form__button">
							<span className="gray-btn__txt text-xs">Sumbit</span>
						</button>
					</form>

					<p className="login__message txt-sm">
						<span className="">New customer? </span>
						<Link to="/registration">
							<span className="login__message-link txt-neutral">Register</span>
						</Link>
					</p>
				</div>
			</BoxBorder>
		</div>
	);
};
