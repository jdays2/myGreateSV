import React from 'react';
import { BoxBorderless } from './ui/BoxBorderless';
import { FaWalkieTalkie } from 'react-icons/fa6';

export const Seo = () => {
	return (
		<BoxBorderless>
			<div className="seo">
				<div className="seo__box txt-neutral">
					<FaWalkieTalkie className="seo__icon" />
          <p className='seo__txt txt-sm'>I'm always happy to hear your opinion, advice or suggestions. Just contact me or leave a message. Let's be friends!</p>
				</div>
			</div>
		</BoxBorderless>
	);
};
