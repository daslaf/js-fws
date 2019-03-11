const getter = (): Promise<number> => new Promise((resolve) => {
  resolve(42);
});

getter().then(console.log);
