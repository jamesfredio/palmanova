import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from './button.svelte';

describe('Button', () => {
	it('renders a button', () => {
		render(Button);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});