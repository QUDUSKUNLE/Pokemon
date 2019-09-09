import App from './app';

const app = new App().app;
const PORT: string | undefined = process.env.PORT;

// tslint:disable-next-line: no-console
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

export default app;
