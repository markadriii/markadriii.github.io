import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const baseTheme: CustomThemeConfig = {
	name: 'base',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter`,
		'--theme-font-family-heading': `Inter`,
		'--theme-font-color-base': 'var(--color-secondary-500)',
		'--theme-font-color-dark': 'var(--color-tertiary-500)',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-secondary-500)',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #c0bdff
		'--color-primary-50': '246 245 255', // #f6f5ff
		'--color-primary-100': '242 242 255', // #f2f2ff
		'--color-primary-200': '239 239 255', // #efefff
		'--color-primary-300': '230 229 255', // #e6e5ff
		'--color-primary-400': '211 209 255', // #d3d1ff
		'--color-primary-500': '192 189 255', // #c0bdff
		'--color-primary-600': '173 170 230', // #adaae6
		'--color-primary-700': '144 142 191', // #908ebf
		'--color-primary-800': '115 113 153', // #737199
		'--color-primary-900': '94 93 125', // #5e5d7d
		// secondary | #98E2D4
		'--color-secondary-50': '240 251 249', // #f0fbf9
		'--color-secondary-100': '234 249 246', // #eaf9f6
		'--color-secondary-200': '229 248 244', // #e5f8f4
		'--color-secondary-300': '214 243 238', // #d6f3ee
		'--color-secondary-400': '183 235 225', // #b7ebe1
		'--color-secondary-500': '152 226 212', // #98E2D4
		'--color-secondary-600': '137 203 191', // #89cbbf
		'--color-secondary-700': '114 170 159', // #72aa9f
		'--color-secondary-800': '91 136 127', // #5b887f
		'--color-secondary-900': '74 111 104', // #4a6f68
		// tertiary | #d2d4da
		'--color-tertiary-50': '248 249 249', // #f8f9f9
		'--color-tertiary-100': '246 246 248', // #f6f6f8
		'--color-tertiary-200': '244 244 246', // #f4f4f6
		'--color-tertiary-300': '237 238 240', // #edeef0
		'--color-tertiary-400': '224 225 229', // #e0e1e5
		'--color-tertiary-500': '210 212 218', // #d2d4da
		'--color-tertiary-600': '189 191 196', // #bdbfc4
		'--color-tertiary-700': '158 159 164', // #9e9fa4
		'--color-tertiary-800': '126 127 131', // #7e7f83
		'--color-tertiary-900': '103 104 107', // #67686b
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #ff9e9e
		'--color-error-50': '255 240 240', // #fff0f0
		'--color-error-100': '255 236 236', // #ffecec
		'--color-error-200': '255 231 231', // #ffe7e7
		'--color-error-300': '255 216 216', // #ffd8d8
		'--color-error-400': '255 187 187', // #ffbbbb
		'--color-error-500': '255 158 158', // #ff9e9e
		'--color-error-600': '230 142 142', // #e68e8e
		'--color-error-700': '191 119 119', // #bf7777
		'--color-error-800': '153 95 95', // #995f5f
		'--color-error-900': '125 77 77', // #7d4d4d
		// surface | #232324
		'--color-surface-50': '222 222 222', // #dedede
		'--color-surface-100': '211 211 211', // #d3d3d3
		'--color-surface-200': '200 200 200', // #c8c8c8
		'--color-surface-300': '167 167 167', // #a7a7a7
		'--color-surface-400': '101 101 102', // #656566
		'--color-surface-500': '35 35 36', // #232324
		'--color-surface-600': '32 32 32', // #202020
		'--color-surface-700': '26 26 27', // #1a1a1b
		'--color-surface-800': '21 21 22', // #151516
		'--color-surface-900': '17 17 18' // #111112
	}
};
