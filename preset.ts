import {
	editFiles,
} from '@preset/core';
  
export default definePreset({
	name: 'simple-import-preset',
	handler: async() => {
		await editFiles({
			files: '.gitignore',
			operations: [
				{
					type: 'add-line',
					lines: ['.env.local', '.env.*.local'],
					position: 'append',
					indent: true,
				},
			],
		});
	},
})
