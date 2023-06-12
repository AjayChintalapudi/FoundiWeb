import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import styles from './styles.module.css';
import NavBar from 'components/NavBar/NavBar';
import { useFormik } from 'formik';
import { UserDataContext } from 'providers/UserDataProvider';
import { useContext } from 'react';
import { editProfile } from 'networking/apis/editProfile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';

const EditProfile = () => {
  // Updated User State then naviagte to home page
  const navigate = useNavigate();

  // UserData Provider Values

  const { user, updateProfile } = useContext(UserDataContext);

  //   handle Edit Profile

  const handleEditProfile = async (values) => {
    console.log(values);
    let data = {
      full_name: values.full_name,
      email: values.email,
      user_id: user._id,
    };

    console.log(data);
    try {
      const response = await editProfile(data);
      console.log(response);
      if (response.data.type === 'success') {
        updateProfile(response.data);
        alert(response.data.message);
        navigate('/');
      }
    } catch {
      console.log('edit profile not updated');
    }
  };

  const formik = useFormik({
    initialValues: {
      full_name: user?.full_name || '',
      email: user?.email || '',
    },
    onSubmit: handleEditProfile,
    enableReinitialize: true,
  });

  const navbarSection = () => {
    return (
      <div className={styles.navabarContainer}>
        <NavBar />
      </div>
    );
  };

  const fullNameInputSection = () => {
    return (
      <Input
        name="full_name"
        type="text"
        placeholder="Enter Full Name"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={styles.fullNameInput}
      />
    );
  };

  const emailInputSection = () => {
    return (
      <Input
        name="email"
        type="email"
        placeholder="Enter Your Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={styles.emailInput}
      />
    );
  };

  const submitButtonSection = () => {
    return (
      <Button
        btName="Submit"
        btnStyles={styles.editProfileBtnStyles}
        type="type"
      />
    );
  };

  return (
    <div className={styles.editProfileContainer}>
      {navbarSection()}
      <div className={styles.editProfileFormMainContainer}>
        <form
          onSubmit={formik.handleSubmit}
          className={styles.editProfileFormContainer}
        >
          {fullNameInputSection()}
          {emailInputSection()}
          {submitButtonSection()}
          {/* {UserUpdateMessage && <p>{UserUpdateMessage}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
