import { useForm } from "../hooks/useForm";

import './UserForm.css';

const UserForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: '', password: '', rememberMe: false },
    validation: (values) => {
      const errors = {};
      if (!values.account) {
        errors.account = '請輸入帳號';
      }
      if (!values.password) {
        errors.password = '請輸入密碼';
      }
      return errors;
    },
    onSubmit: (values) => console.table(values),
  });

  return (
    <div className="form">
      <div className="form-group">
        <input
          type="text"
          name="account"
          className={`form-control ${errors.account && 'invalid'}`}
          onChange={handleChange}
          value={values.account}
          placeholder="account"
        />
        {errors.account && <div className="error-message">{errors.account}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="password"
          className={`form-control ${errors.password && 'invalid'}`}
          onChange={handleChange}
          value={values.password}
          placeholder="password"
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            checked={values.rememberMe}
          />
          Remember Me
        </label>
      </div>

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default UserForm;
