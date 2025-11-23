# 🧠 TypeScript Installation and Setup Guide

## ✅ 1. Check Node.js Version
Before installing TypeScript, make sure Node.js is installed on your system.

```bash
node -v
```

If Node.js is not installed, download it from [https://nodejs.org](https://nodejs.org).

---

## ⚙️ 2. Install TypeScript Globally
Install TypeScript globally using npm:

```bash
npm install -g typescript
```

This allows you to use the `tsc` (TypeScript Compiler) command from anywhere.

---

## 🔍 3. Check TypeScript Version
After installation, verify that TypeScript is installed successfully:

```bash
tsc -v
```

---

## ✍️ 4. Write and Compile TypeScript Code
Create a new TypeScript file, for example:

**index.ts**
```ts
const message: string = "Hello TypeScript!";
console.log(message);
```

Now compile the file into JavaScript:

```bash
tsc index.ts
```

It will generate a new file named **index.js** containing the compiled JavaScript code.

---

## ⚡ 5. Initialize TypeScript Configuration
To set up a configuration file for your project, run:

```bash
tsc --init
```

This command creates a new **tsconfig.json** file in your project directory.

---

### ⚙️ Inside `tsconfig.json`, do the following:

1. Set the **root directory** (where your TypeScript files are located):

   ```json
   "rootDir": "./src"
   ```

2. Set the **output directory** (where the compiled JavaScript files will be saved):

   ```json
   "outDir": "./dist"
   ```

---

## 🚀 6. Compile the Project
Now, simply run the TypeScript compiler:

```bash
tsc
```

It will automatically compile all `.ts` files from your `rootDir` into `.js` files inside your `outDir`.

---

### 🏁 Done!
Your TypeScript setup is complete 🎉  
You can now write `.ts` files, and compile them easily using:

```bash
tsc
```
# Typescript-5.9.3
