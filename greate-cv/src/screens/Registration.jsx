import React from 'react';
import { useTitle } from '../hooks/useTitle';
import { BoxBorder } from '../components/ui/BoxBorder';

export const Registration = () => {
	useTitle('Registration');
	return (
		<div className="login">
			<BoxBorder>
				<div className="login__container">
					<h1 className="txt-2xl login__title">Registration</h1>

					<form className="form">
						<div className="form__input-box">
							<label className="form__input-label">Name</label>
							<input
								className="form__input txt-sm"
								placeholder="Type ur name"
							/>
							<span className="form__input-error active text-xs">
								Something wrong!
							</span>
						</div>

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

						<div className="form__input-box">
							<label className="form__input-label">Password confirmation</label>
							<input
								className="form__input txt-sm"
								placeholder="Type ur password again"
							/>
							<span className="form__input-error active text-xs">
								Something wrong!
							</span>
						</div>

						<button
							type="submit"
							className="gray-btn form__button">
							<span className="gray-btn__txt text-xs">Create account</span>
						</button>
					</form>
				</div>
			</BoxBorder>
		</div>
	);
};
