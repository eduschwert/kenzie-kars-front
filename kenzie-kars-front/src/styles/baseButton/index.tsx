import { ReactNode } from 'react';

interface iBaseButtonProps {
	tag: string;
	className?: string;
	children: ReactNode;
}

export const BaseButton = ({ children, tag, className }: iBaseButtonProps) => {
	return (
		<div>
			{tag !== 'button' && tag !== 'a' && (
                <button className={className}>{children}</button>
            )}
			{tag === 'button' && <button className={className}>{children}</button>}
			{tag === 'a' && <a className={className}>{children}</a>}
		</div>
	);
};
