import useForm from "../../../hooks/useForm";
import Input from "../Input/Input";

// Пример реализации валидаций с использованием хука useForm()
const Form = () => {
  const { formData, formErrors, handleInput } = useForm({
    text: "",
    email: "",
    password: "",
  });

  return (
    <>
      <form className="max-w-md mx-auto mt-8 p-6 border rounded shadow-md">
        <Input
          label="Name"
          name="text"
          type="text"
          value={formData?.text}
          onInput={handleInput}
          error={formErrors?.text}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleInput}
          error={formErrors?.email}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData?.password}
          onInput={handleInput}
          error={formErrors?.password}
          required
        />
        <button>Отправить</button>
      </form>
    </>
  );
};

export default Form;
