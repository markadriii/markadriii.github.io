import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const baseTheme: CustomThemeConfig = {
	name: 'base',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter`,
		'--theme-font-family-heading': `Inter`,
		'--theme-font-color-base': 'var(--color-secondary-500)',
		'--theme-font-color-dark': '255 255 255',
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
		// primary | #120020
		'--color-primary-50': '219 217 222', // #dbd9de
		'--color-primary-100': '208 204 210', // #d0ccd2
		'--color-primary-200': '196 191 199', // #c4bfc7
		'--color-primary-300': '160 153 166', // #a099a6
		'--color-primary-400': '89 77 99', // #594d63
		'--color-primary-500': '18 0 32', // #120020
		'--color-primary-600': '16 0 29', // #10001d
		'--color-primary-700': '14 0 24', // #0e0018
		'--color-primary-800': '11 0 19', // #0b0013
		'--color-primary-900': '9 0 16', // #090010
		// secondary | #d2d4da
		'--color-secondary-50': '248 249 249', // #f8f9f9
		'--color-secondary-100': '246 246 248', // #f6f6f8
		'--color-secondary-200': '244 244 246', // #f4f4f6
		'--color-secondary-300': '237 238 240', // #edeef0
		'--color-secondary-400': '224 225 229', // #e0e1e5
		'--color-secondary-500': '210 212 218', // #d2d4da
		'--color-secondary-600': '189 191 196', // #bdbfc4
		'--color-secondary-700': '158 159 164', // #9e9fa4
		'--color-secondary-800': '126 127 131', // #7e7f83
		'--color-secondary-900': '103 104 107', // #67686b
		// tertiary | #c0bdff
		'--color-tertiary-50': '246 245 255', // #f6f5ff
		'--color-tertiary-100': '242 242 255', // #f2f2ff
		'--color-tertiary-200': '239 239 255', // #efefff
		'--color-tertiary-300': '230 229 255', // #e6e5ff
		'--color-tertiary-400': '211 209 255', // #d3d1ff
		'--color-tertiary-500': '192 189 255', // #c0bdff
		'--color-tertiary-600': '173 170 230', // #adaae6
		'--color-tertiary-700': '144 142 191', // #908ebf
		'--color-tertiary-800': '115 113 153', // #737199
		'--color-tertiary-900': '94 93 125', // #5e5d7d
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
		// warning | #eab308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #eab308
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
		// surface | #b0b0b0
		'--color-surface-50': '243 243 243', // #f3f3f3
		'--color-surface-100': '239 239 239', // #efefef
		'--color-surface-200': '235 235 235', // #ebebeb
		'--color-surface-300': '223 223 223', // #dfdfdf
		'--color-surface-400': '200 200 200', // #c8c8c8
		'--color-surface-500': '176 176 176', // #b0b0b0
		'--color-surface-600': '158 158 158', // #9e9e9e
		'--color-surface-700': '132 132 132', // #848484
		'--color-surface-800': '106 106 106', // #6a6a6a
		'--color-surface-900': '86 86 86' // #565656
	}
};
