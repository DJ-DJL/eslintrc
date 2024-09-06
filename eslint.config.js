import eslintComments from 'eslint-plugin-eslint-comments';
import sonar from 'eslint-plugin-sonarjs';


export const general = {
    "settings": {
        "react": {
            "version": "0.0" // Explicitly set to avoid React settings if not using React
        }
    },
    plugins: {
        "eslint-comments": eslintComments,
        ...sonar.configs.recommended.plugins
    },
    rules: {
        ...sonar.configs.recommended.rules,
        "eslint-comments/require-description": "error",
        "sonarjs/cognitive-complexity": ["error", 10],
        "sonarjs/todo-tag": "warn",
        "sonarjs/no-commented-code": "off",
        "no-else-return": ["error", { "allowElseIf": false }]
    }
}

export const typescript = {
    rules: {
        "@typescript-eslint/no-explicit-any": "off",

    }
}

export default [
    // sonar.configs.recommended,
    general,
    typescript
];
