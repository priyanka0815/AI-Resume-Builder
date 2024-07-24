## Strapi flaws

Strapi have some sort of issue in the latest versions so to fix them, here are a quick guide (Occur only with the components)

- Redirect to node_modules\\@strapi\core\dist\loaders\components.js
- Modify line number 15, from : `const schema = map[category][key]` to `const schema = map[category]`
- now go to the Schema of various Content Types, and search for relational block something line

```
{
    "displayName": "Experience",
    "type": "component",
    "repeatable": false,
    "component": "experience.experience"
}
```

- and modify `component` key value from `experience.experience` in my case to `experience\\experience.__filename__`

```
{
    "displayName": "Experience",
    "type": "component",
    "repeatable": false,
    "component": "experience\\experience.__filename__"
}
```
