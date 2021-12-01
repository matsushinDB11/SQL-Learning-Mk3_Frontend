module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        project: './tsconfig.eslint.json',
        "sourceType": "module",
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
    ],
    "rules": {
        // occur error in `import React from 'react'` with react-scripts 4.0.1
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
        ],
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'argsIgnorePattern': '_',
                'ignoreRestSiblings': false,
                'varsIgnorePattern': '_',
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
    overrides: [
        {
            'files': ['*.tsx'],
            'rules': {
                'react/prop-types': 'off',
            },
        },
    ],
    settings: {
        react: {
            "version": "detect"
        },
        'import/resolver': {
            node: {
                paths: ['src'],
            }
        }
    }
};
