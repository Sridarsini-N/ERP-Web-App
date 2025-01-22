import React from 'react';

import useLanguage from '@/locale/useLanguage';

import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import CrudModule from '@/modules/CrudModule/CrudModule';
import UserForm from '@/forms/UserForm';

export default function User() {
  const translate = useLanguage();
  const entity = 'user';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  };

  const deleteModalLabels = ['name'];

  const readColumns = [
    {
      title: translate('User Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Email'),
      dataIndex: 'Email',
    },
    {
      title: translate('Mobile Number'),
      dataIndex: 'Mobile Number',
    },
    {
      title: translate('Password'),
      dataIndex: 'Password',
    },
  ];
  const dataTableColumns = [
    {
      title: translate('User Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
     {
      title: translate('Mobile number'),
      dataIndex: 'mobile number',
    },
    {
      title: translate('Role'),
      dataIndex: 'role',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('users'),
    DATATABLE_TITLE: translate('users_list'),
    ADD_NEW_ENTITY: translate('add_new_user'),
    ENTITY_NAME: translate('users'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}
