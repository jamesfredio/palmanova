import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach } from 'vitest';
import Button from './button.svelte';

afterEach(() => {
	cleanup();
});
//after each test, clear the fake page


describe('Button', () => {
	it('renders a button', () => {
		render(Button);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('uses button as the default type', () => {
	render(Button);

	expect(screen.getByRole('button'))
		.toHaveAttribute('type', 'button');
});
	it('should be disabled when disabled prop is true', () => {
	render(Button, { disabled: true });

	expect(screen.getByRole('button'))
		.toBeDisabled();
});
});