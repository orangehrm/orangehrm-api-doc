define({ "api": [
  {
    "type": "get",
    "url": "/organization",
    "title": "03.Get Organization Information",
    "name": "getOrganization",
    "group": "Admin",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Record id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taxId",
            "description": "<p>Tax id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registrationNumber",
            "description": "<p>Registration number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Company phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>Company fax .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Company email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Zip code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street1",
            "description": "<p>Street 1.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street2",
            "description": "<p>Street 2.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfEmployees",
            "description": "<p>Number of employees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": {\n\t\t    \"id\": \"1\",\n\t\t    \"name\": \"Beacon Test\",\n\t\t    \"taxId\": \"234\",\n\t\t    \"registraionNumber\": \"Errt1\",\n\t\t    \"phone\": \"097645362\",\n\t\t    \"fax\": \"07647364\",\n\t\t    \"email\": \"Orange@live.com\",\n\t\t    \"country\": \"UK\",\n\t\t    \"province\": \"Western\",\n\t\t    \"city\": \"London\",\n\t\t    \"zipCode\": \"12345\",\n\t\t    \"street1\": \"No 56 Wellington street \",\n\t\t    \"street2\": \"grand central london\",\n\t\t    \"note\": \"sample note\"\n\t\t  },\n\t\t  \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"Employee Picture Not Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-organization-info-end-point.php",
    "groupTitle": "Admin",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "01.Get Users",
    "name": "getUsers",
    "group": "Admin",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of results per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userRole",
            "description": "<p>User role id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t    \"data\":[\n\t\t\t{\n\t\t\t    \"userName\":\"hameesh\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Hameesh Von Johnson\"\n\t\t\t},\n\t\t\t{\n\t\t\t    \"userName\":\"nina123\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Nina Jane Lewis\"\n\t\t\t},\n\t\t\t{\n\t\t\t    \"userName\":\"shawn\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Shawn haffman\"\n\t\t\t}\n\t\t    ],\n\t\t    \"rels\":[\n\n\t\t    ]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Users Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-users-end-point.php",
    "groupTitle": "Admin",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "02.User Login",
    "name": "userLogin",
    "group": "Admin",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>User login ( true or false ).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"login\": true,\n\t\t  \"user\": {\n\t\t    \"userName\": \"Admin\",\n\t\t    \"userRole\": \"Admin\",\n\t\t    \"status\": \"Enabled\",\n\t\t    \"employeeName\": \"\"\n          \"employeeId\": \"\"\n\t\t  }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Credentials Are Wrong Please Try Again\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 501 Bad Request\n{\n  \"error\": [\"Login Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user-login-end-point.php",
    "groupTitle": "Admin",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/punch-in",
    "title": "01.Punch In",
    "name": "punchIn",
    "group": "Attendance",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Time zone ( ex: Europe/London ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Punch in note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "datetime",
            "description": "<p>Date and time</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n       {\n       \"success\": \"Successfully Punched In\",\n       \"id\": \"004\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Time Zone\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Employee Id  Not Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Cannot Proceed Punch In Employee Already Punched In\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/punch-in-end-point.php",
    "groupTitle": "Attendance",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/punch-out",
    "title": "02.Punch Out",
    "name": "punchOut",
    "group": "Attendance",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Time zone ( ex: Europe/London ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Punch out note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "datetime",
            "description": "<p>Date and time</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n       {\n       \"success\": \"Successfully Punched Out\",\n       \"id\": \"004\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Time Zone\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Employee Id  Not Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Cannot Proceed Punch Out Employee Already Punched Out\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/punch-out-end-point.php",
    "groupTitle": "Attendance",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/dependent",
    "title": "09.Employee Dependents",
    "name": "GetEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship",
            "description": "<p>Relationship of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "seqNumber",
            "description": "<p>Sequence number of the dependent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n     {\n        \"name\": \"Inu Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"1989-09-02\",\n        \"sequenceNumber\": \"5\"\n     },\n     {\n        \"name\": \"Sam Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"2009-09-02\"\n        \"sequenceNumber\": \"5\"\n     }\n    ],\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/9-employee-dependent-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "02.Employee Detail",
    "name": "GetEmployeeDetail",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driversLicenseNumber",
            "description": "<p>Employee driver's license number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licenseExpiryDare",
            "description": "<p>Employee driver's license expiry date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>Employee marital status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherId",
            "description": "<p>Employee other id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>Employee job title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>Employee sub unit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "supervisor",
            "description": "<p>Employee supervisor details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis (Past Employee)\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n  \"rels\": {\n    \"contact-detail\": \"/employee/:id/contact-detail\",\n    \"supervisor\": \"/employee/:id/supervisor\",\n    \"job-detail\": \"/employee/:id/job-detail\",\n    \"dependent\": \"/employee/:id/dependent\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/2-employee-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/job-detail",
    "title": "13.Employee Job Detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"title\": \"Web Developer\",\n        \"category\": \"Engineering\",\n        \"status\": \"Active\",\n        \"joinedDate\": \"2001-01-12\",\n        \"subunit\": \"Marketing Unit\",\n        \"location\": Eng Dept,\n        \"startDate\": \"2001-02-01\",\n        \"endDate\": \"2005-02-01\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/13-employee-job-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/job-detail",
    "title": "14.Save Employee Job Detail",
    "name": "SaveEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>Job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Job category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Job location id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/14-save-employee-job-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/search",
    "title": "05.Employee Search",
    "name": "SearchEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>Employee status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "supervisor",
            "description": "<p>Supervisor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "jobTitle",
            "description": "<p>Employee job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>Employee birth day.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "include",
            "description": "<p>Include Termination ( TERMINATED_ONLY , WITHOUT_TERMINATED ,TERMINATED_ONLY )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Matching Employee list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"45\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Shane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis (Past Employee)\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n  ],\n  \"rels\": {\n\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmployeeNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/5.employee-search-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id",
    "title": "03.Update Employee Detail",
    "name": "UpdateEmployeeDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licenseNumber",
            "description": "<p>Employee driver's license number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licenseNumberExpDate",
            "description": "<p>Employee driver's license expiry date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>Employee marital status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the employee (M-Male/F-Female).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherId",
            "description": "<p>Employee other id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>Data Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/3-update-employee-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "del",
    "url": "/employee/:id/custom-field",
    "title": "31.Delete Employee Custom Field",
    "name": "deleteEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\",\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/31-delete-employee-custom-field-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "del",
    "url": "/employee/:id/dependent",
    "title": "10.Delete Employee Dependents",
    "name": "deleteEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequenceNumber",
            "description": "<p>Mandatory sequence number of the dependent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Deleting Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": [\"Deleting Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/10-delete-employee-dependents-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "del",
    "url": "/employee/:id/education",
    "title": "27.Delete Employee Education",
    "name": "deleteEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\",\n\"seqId\":3\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Education Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/27-delete-employee-education-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "del",
    "url": "/employee/:id/supervisor",
    "title": "18.Delete Supervisor Details",
    "name": "deleteEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id (Mandatory).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor (Mandatory).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Supervisor Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/18-delete-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "del",
    "url": "/employee/:id/work-experience",
    "title": "24.Delete Employee Work Experience",
    "name": "deleteEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Work experience record id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Work Experience Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/24-delete-employee-work-Experience-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/custom-field",
    "title": "32.Custom Field",
    "name": "getCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Field type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen",
            "description": "<p>Applicable screen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "extraData",
            "description": "<p>Extra data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"4\",\n\t\t      \"name\": \"Course\",\n\t\t      \"type\": \"Drop Down\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"extraData\": \"Bsc,Msc,PostGrad\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"3\",\n\t\t      \"name\": \"GPA\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"extraData\": null\n\t\t    }\n\t\t  ]\n\t\t }",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/32-get-custom-field-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "06.Employee Contact Detail",
    "name": "getEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Employee full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"empNumber\": \"1\",\n        \"fullName\": \"Nina Jane Lewis\",\n        \"addressStreet1\": \"No 35 Park street ,Devmore canada\",\n        \"addressStreet2\": \"No 40 River view Devmore\",\n        \"city\": \"Devmore\",\n        \"state\": \"Western\",\n        \"zip\": \"15224\",\n        \"country\": \"Canada\",\n        \"homeTelephone\": \"154475426\",\n        \"workTelephone\": \"01244545144545\",\n        \"mobile\": \"1204415552\",\n        \"workEmail\": \"nina@orangehrmlive.com\",\n        \"otherEmail\": \"ninalewis@yahoo.com\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/6-employee-contact-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/custom-field",
    "title": "28.Employee Custom Field",
    "name": "getEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Field type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen",
            "description": "<p>Applicable screen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"4\",\n\t\t      \"name\": \"Course\",\n\t\t      \"type\": \"Drop Down\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": \"Bsc\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"3\",\n\t\t      \"name\": \"GPA\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": 3.6\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"2\",\n\t\t      \"name\": \"school\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"dependents\",\n\t\t      \"value\": \"Prince Of Wales\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"1\",\n\t\t      \"name\": \"University Name\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": \"University Of Moratuwa\"\n\t\t    }\n\t\t  ]\n\t\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/28-get-employee-custom-field-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/education",
    "title": "25.Employee Education",
    "name": "getEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"seqId\": \"1\",\n\t\t      \"level\": \"Graduate\",\n\t\t      \"institute\": \"\",\n\t\t      \"specialization\": \"batsmen\",\n\t\t      \"year\": \"2014\",\n\t\t      \"fromDate\": \"2014-05-16\",\n\t\t      \"toDate\": \"2024-05-09\",\n\t\t      \"gpa\": \"4.0\"\n\t\t    }\n\t\t  ]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/25-get-employee-education-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/id/photo",
    "title": "34.Employee Picture",
    "name": "getEmployeePicture",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "base64",
            "description": "<p>Base64 encoded employee picture details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t     \"base64\": \"/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAY\"\n\t\t    }\n\t\t  ]\n\t\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Picture Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Picture Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/34-get-employee-picture-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/supervisor",
    "title": "16.Supervisor Details",
    "name": "getEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Supervisor name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Supervisor code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": [\n   {\n     \"name\": \"Hameesh Von Johnson\",\n      \"id\": \"5\",\n      \"code\": \"1021\",\n      \"reportingMethod\": \"Direct\"\n   },\n   {\n     \"name\": \"James Paterson\",\n      \"id\": \"2\",\n      \"code\": \"103\",\n      \"reportingMethod\": \"Direct\"\n   },\n         ],\n   'rels : []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/16-get-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/work-experience",
    "title": "21.Employee Work Experience",
    "name": "getEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Work experience id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>Job title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"2\",\n\t\t      \"company\": \"Aniline pvt ltd\",\n\t\t      \"jobTitle\": \"Craft Worker\",\n\t\t      \"fromDate\": \"2016-02-09 00:00:00\",\n\t\t      \"toDate\": \"2017-02-12 00:00:00\",\n\t\t      \"comment\": \"sample comment\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"1\",\n\t\t      \"company\": \"NSR 11\",\n\t\t      \"jobTitle\": \"Craft Worker123\",\n\t\t      \"fromDate\": \"2014-02-09 00:00:00\",\n\t\t      \"toDate\": \"2016-02-12 00:00:00\",\n\t\t      \"comment\": \"test\"\n\t\t    }\n\t\t  ]\n\n\t\t}\n*   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/21-get-employee-work-Experience-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/event",
    "title": "20.Get Employee Events",
    "name": "getEvents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Event from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Event to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event ( UPDATE | SAVE | DELETE ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Event type ( employee | contact | jobDetail | supervisor | subordinate |dependent ).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Event type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Created user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Created date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t \"data\": [\n\t    {\n\t      \"employeeId\": \"3\",\n\t      \"employeeName\": \"Glen Maxwell\",\n\t      \"event\": \"UPDATE\",\n\t      \"type\": \"contact\",\n\t      \"createdBy\": \"Admin\",\n\t      \"createdDate\": \"2017-04-12 11:05:51\",\n\t      \"note\": \"Update Employee Contact Details\"\n\t    },\n\t    {\n\t      \"employeeId\": \"3\",\n\t      \"employeeName\": \"Glen Maxwell\",\n\t      \"event\": \"SAVE\",\n\t      \"type\": \"supervisor\",\n\t      \"createdBy\": \"Admin\"\n\t      \"createdDate\": \"2017-04-12 01:47:23\",\n\t      \"note\": \"Saving Employee Supervisor Details\"\n          }\n               ]\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>No Event Records Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Records Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/20-get-employee-event-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id",
    "title": "01.Save Employee",
    "name": "saveEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Mandatory First name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Mandatory Last name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\",\n   \"id\": \"11\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/1-save-employee-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/contact-detail",
    "title": "07.Save Employee Contact Detail",
    "name": "saveEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/7-save-employee-contact-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/custom-field",
    "title": "29.Save Employee Custom Field",
    "name": "saveEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": \"Field Value Must Not Be Empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/29-save-employee-custom-field-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/education",
    "title": "26.Save Employee Education",
    "name": "saveEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\"seqId\":3\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/26-save-employee-education-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/supervisor",
    "title": "17.Save Supervisor Details",
    "name": "saveEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/17-save-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/work-experience",
    "title": "22.Save Employee Work Experience",
    "name": "saveEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\"seqId\":3\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/22-save-employee-work-Experience-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/dependent",
    "title": "12.Save Employee Dependent",
    "name": "saveEmployee_dependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of dependent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\",\n   \"sequenceNumber\": 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/12-save-employee-dependents-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/action/terminate",
    "title": "04.Terminate Employment",
    "name": "terminateEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Mandatory termination date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Mandatory termination reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Termination note.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Terminated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Termination Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/4-terminate-employee-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/contact-detail",
    "title": "08.Update Employee Contact Detail",
    "name": "updateEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Updating Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Updating Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/8-update-employee-contact-details-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/custom-field",
    "title": "30.Update Employee Custom Field",
    "name": "updateEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": \"Field Value Must Not Be Empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/30-update-employee-custom-field-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/dependent",
    "title": "11.Update Employee Dependents",
    "name": "updateEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sequenceNumber",
            "description": "<p>Mandatory sequence number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Updating Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"Invalid parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/11-update-employee-dependents-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/education",
    "title": "33.Update Employee Education",
    "name": "updateEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDateDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Updated\",\n\"seqId\":3\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Education Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/33-update-employee-education-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/job-detail",
    "title": "15.Update Employee Job Detail",
    "name": "updateEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>Job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Job category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Job location id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>Data Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/15-update-employee-job-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/supervisor",
    "title": "19.Update Supervisor Details",
    "name": "updateEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/19-update-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/work-experience",
    "title": "23.Update Employee Work Experience",
    "name": "updateEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Work experience record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Updated\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Work Experience Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/23-update-employee-work-Experience-end-point.php",
    "groupTitle": "Employee",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/entitlement",
    "title": "05.Get Employee Leave Entitlement",
    "name": "employeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "leaveType",
            "description": "<p>Leave type id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entitlement id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>Valid from date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>Valid to date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>Entitled days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n\n   {\n   \"data\": [\n   {\n   \"id\": \"1\",\n   \"type\": \"Casual\",\n   \"validFrom\": \"2017-01-01\",\n   \"validTo\": \"2017-12-31\",\n   \"days\": \"5.0\"\n   },\n   {\n   \"id\": \"2\",\n   \"type\": \"Annual\",\n   \"validFrom\": \"2017-01-01 \",\n   \"validTo\": \"2018-02-28 \",\n   \"days\": \"10.0\"\n   }\n   ],\n   \"rels\": []\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/leave-request",
    "title": "09.Get Employee Leave Requests",
    "name": "employeeLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Leave request comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Commented date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Commented time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment .</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Leave days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Leave status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Leave duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "durationString",
            "description": "<p>Leave duration as a String for specify time and half days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"employeeName\" : \"Shane Warne\",\n      \"employeeId\"   :'34',\n      \"id\": \"2\",\n      \"fromDate\": \"2017-03-31\",\n      \"toDate\": \"2017-03-31\",\n      \"leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Casual leaves are granted\"\n               },\n               {\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"leaves granted\"\n               }\n                      ]\n    \"days\": [\n         {\n           \"date\": \"2017-05-25\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Granted\"\n               },\n               {\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"Check the balance\"\n               }\n                      ]\n       },\n       {\n           \"date\": \"2017-05-24\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": []\n       }\n           ]\n\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-requests-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/leave/period",
    "title": "03.Get Leave Period",
    "name": "getLeavePeriods",
    "group": "Leave",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n       {\n        \"data\": [\n       [\n\n       \"2017-01-01\",\n       \"2018-02-28\"\n\n       ],\n       [\n\n       \"2018-03-01\",\n       \"2019-02-28\"\n\n       ]\n       ],\n       \"rels\": []\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Leave Periods Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-leave-period-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/leave/type",
    "title": "02.Get Leave Types",
    "name": "leaveTypes",
    "group": "Leave",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave type id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"type\": \"Annual\",\n   \"id\": \"11\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Leave Types Available\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/leave-types-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/entitlement",
    "title": "04.Save Employee Leave Entitlement",
    "name": "saveEmployeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "leaveType",
            "description": "<p>Leave type id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>Number of days.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/leave-request",
    "title": "06.Save Leave Single Day Request",
    "name": "saveLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleType",
            "description": "<p>Single day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM') (required for 'half_day').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleFromTime",
            "description": "<p>Single day from time for specify time ( required if specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleToTime",
            "description": "<p>Single day to time for specify time ( required if specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Leave action type ( &quot;SCHEDULED&quot;&quot;PENDING&quot;&quot;REJECTED&quot;&quot;CANCELLED&quot;).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-leave-request-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/leave/type",
    "title": "01.Save Leave Type",
    "name": "saveLeaveType",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory leave type name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-leave-type-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/leave-request",
    "title": "08.Save Multiple Day Leave Request",
    "name": "saveMultipleDayLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partialOption",
            "description": "<p>Partial day option ( required ) ('all','start','end','start_end','none' ). Note : If partial option is 'all'  start day fields must be filled. If partial option is 'end'  end day fields must be filed. If partial option is 'start'  start day fields must be filed. If partial option is 'start_end'  start and end day fields must be filed. If partial option is 'none'  No partial option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayType",
            "description": "<p>Start day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM') required for  start day 'half_day'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayFromTime",
            "description": "<p>Start day from time for specify time(required for start day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayToTime",
            "description": "<p>Start day to time for specify time(required for start day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayType",
            "description": "<p>End day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM')required for end day 'half_day'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayFromTime",
            "description": "<p>End day from time for specify time(required for end day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayToTime",
            "description": "<p>End day to time for specify time (required for end day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Leave action type ( &quot;SCHEDULED&quot;&quot;PENDING&quot;&quot;REJECTED&quot;&quot;CANCELLED&quot;).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-multiple-day-leave-request-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/leave/search",
    "title": "07.Search Leave Requests",
    "name": "searchLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rejected",
            "description": "<p>Leave status rejected ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cancelled",
            "description": "<p>Leave status cancelled ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pendingApproval",
            "description": "<p>Leave status pending approval ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scheduled",
            "description": "<p>Leave status scheduled ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taken",
            "description": "<p>Leave status taken ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pastEmployee",
            "description": "<p>Past employee results ( 'true' /'false').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "subunit",
            "description": "<p>Employee subunit id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Leave record limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Leave request comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Commented date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Commented time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment .</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Leave days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Leave status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Leave duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "durationString",
            "description": "<p>Leave duration as a String for specify time and half days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"employeeName\" : \"Shane Warne\",\n      \"employeeId\"   :'34',\n      \"id\": \"2\",\n      \"fromDate\": \"2017-03-31\",\n      \"toDate\": \"2017-03-31\",\n      \"leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Test\"\n               },\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"Test\"\n               }\n    \"days\": [\n         {\n           \"date\": \"2017-05-25\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": []\n       },\n       {\n           \"date\": \"2017-05-24\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": []\n       }\n           ]\n\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/search-leave-requests-end-point.php",
    "groupTitle": "Leave",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/kpis",
    "title": "01.Get KPIS",
    "name": "getKPIS",
    "group": "Performance",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Job title id.</p>"
          },
          {
            "group": "Success 200",
            "type": "jobTitleCode",
            "optional": false,
            "field": "Title",
            "description": "<p>code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "JobTitleName",
            "description": "<p>Title name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobDescription",
            "description": "<p>Job description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isDeleted",
            "description": "<p>Is deleted or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kpi",
            "description": "<p>User status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minRating",
            "description": "<p>Min Rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxRating",
            "description": "<p>Max rating.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"1\",\n\t\t      \"jobTitleCode\": {},\n\t\t      \"jobTitle\": {\n\t\t\t\"id\": \"1\",\n\t\t\t\"jobTitleName\": \"marketing\",\n\t\t\t\"jobDescription\": \"\",\n\t\t\t\"note\": \"\",\n\t\t\t\"isDeleted\": \"0\"\n\t\t      },\n\t\t      \"kpi\": \"Test\",\n\t\t      \"minRating\": \"0\",\n\t\t      \"maxRating\": \"5\"\n\t\t    }\n\t\t  ],\n\t\t  \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get_kpis-end-point.php",
    "groupTitle": "Performance",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "delete",
    "url": "/activity",
    "title": "08.Delete Activity",
    "name": "delete",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Activity name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Activity Name Already Exists\n{\n  \"error\": [\"Activity Name Already Exists\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Project Found\n{\n  \"error\": [\"No Projects Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/delete-activity-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "delete",
    "url": "/customer",
    "title": "04.Delete Customer",
    "name": "deleteCustomer",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer Id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Customer Not Found\n{\n  \"error\": [\"Customer Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/delete-customer-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "delete",
    "url": "/project",
    "title": "12.Delete Project",
    "name": "deleteProject",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Project ID Needed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Project Not Found\n{\n  \"error\": [\"Project Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/delete-project-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "delete",
    "url": "/employee/:id/timesheet/row_delete",
    "title": "16.Delete Timesheet Row",
    "name": "deleteTimesheetRow",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timesheetId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Project id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Unable To Delete Timesheet Rows\n{\n  \"error\": [\"Unable To Delete Timesheet Rows\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/delete-timesheetRow-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/activity",
    "title": "05.Get Activities",
    "name": "getActivities",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Activity name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isDeleted",
            "description": "<p>Is deleted(1,0).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"activityId\": \"2\",\n\t\t      \"isDeleted\": \"0\",\n\t\t      \"name\": \"test activity\"\n\t\t    },\n\t\t    {\n\t\t      \"activityId\": \"3\",\n\t\t      \"isDeleted\": \"0\",\n\t\t      \"name\": \"test activity2\"\n\t\t    }\n\n\t\t  ],\n\t\t  \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 No Records Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-activity-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/customer",
    "title": "01.Get Customers",
    "name": "getCustomers",
    "group": "Time",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isDeleted",
            "description": "<p>Is deleted( 1,0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"customerId\": \"1\",\n\t\t      \"isDeleted\": \"0\",\n\t\t      \"name\": \"Aus Trading\",\n\t\t      \"description\": \"Description\"\n\t\t    },\n\t\t    {\n\t\t      \"customerId\": \"2\",\n\t\t      \"isDeleted\": \"0\",\n\t\t      \"name\": \"Test11\",\n\t\t      \"description\": \"Test Description\"\n\t\t    }\n\t\t  ],\n\t\t  \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 No Customers Found\n{\n  \"error\": [\"No Customers Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-customers-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/project",
    "title": "09.Get Projects",
    "name": "getProjects",
    "group": "Time",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isDeleted",
            "description": "<p>Is deleted status values (0,1).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>Project name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "admins",
            "description": "<p>Project admins.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activities",
            "description": "<p>Project activities.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Project admin employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Project admin name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.id",
            "description": "<p>Project Activity id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.name",
            "description": "<p>Project activity name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.isDeleted",
            "description": "<p>Project is deleted status (1,0).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t    \"data\": [\n\t\t\t{\n\t\t\t    \"projectId\": \"1\",\n\t\t\t    \"projectName\": \"Manage Sub Units\",\n\t\t\t    \"customerId\": \"2\",\n\t\t\t    \"customerName\": \"customer\",\n\t\t\t    \"description\": \"description\",\n\t\t\t    \"isDeleted\": \"0\",\n\t\t\t    \"admins\": {\n\t\t\t\t\"employeeId\": \"3\",\n\t\t\t\t\"name\": \"Hameesh Marshall\"\n\t\t\t    },\n\t\t\t    \"activities\": [\n\t\t\t\t{\n\t\t\t\t    \"id\": \"1\",\n\t\t\t\t    \"name\": \"unit1\",\n\t\t\t\t    \"isDeleted\": \"0\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t    \"id\": \"2\",\n\t\t\t\t    \"name\": \"planning\",\n\t\t\t\t    \"isDeleted\": \"0\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t    \"id\": \"3\",\n\t\t\t\t    \"name\": \"Electrical\",\n\t\t\t\t    \"isDeleted\": \"0\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t    \"id\": \"4\",\n\t\t\t\t    \"name\": \"Testing\",\n\t\t\t\t    \"isDeleted\": \"0\"\n\t\t\t\t}\n\t\t\t    ]\n\t\t\t}\n\t\t  \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 No Projects Found\n{\n  \"error\": [\"No Projects Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-projects-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "get",
    "url": "/employee/:id/timesheet",
    "title": "13.Get TimeSheets",
    "name": "getTimesheets",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timesheet start date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timeSheetId",
            "description": "<p>Timesheet id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timeSheetItemId",
            "description": "<p>Timesheet item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>Project name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activityName",
            "description": "<p>Project activity name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Project activity id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Timesheet item date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Timesheet item duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Timesheet state change comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t    \"data\": [\n\t\t\t{\n\t\t\t    \"timeSheetId\": \"1\",\n\t\t\t    \"employeeId\": \"1\",\n\t\t\t    \"startDate\": \"2017-06-26\",\n\t\t\t    \"endDate\": \"2017-07-02\",\n\t\t\t    \"state\": \"REJECTED\",\n\t\t\t    \"timeSheetItems\": [\n\t\t\t\t{\n                  \"timesheetItemId\": \"1\",\n\t\t\t\t    \"projectName\": \"4\",\n\t\t\t\t    \"projectId\": \"4\",\n\t\t\t\t    \"activityName\": \"Tournement\",\n\t\t\t\t    \"activityId\": \"6\",\n\t\t\t\t    \"date\": \"2017-06-26\",\n\t\t\t\t    \"duration\": \"21600\",\n\t\t\t\t    \"comment\": null\n\t\t\t\t},\n\t\t\t\t{\n                  \"timesheetItemId\": \"2\",\n\t\t\t\t    \"projectName\": \"4\",\n\t\t\t\t    \"projectId\": \"4\",\n\t\t\t\t    \"activityName\": \"Tournement\",\n\t\t\t\t    \"activityId\": \"6\",\n\t\t\t\t    \"date\": \"2017-06-27\",\n\t\t\t\t    \"duration\": \"25200\",\n\t\t\t\t    \"comment\": null\n\t\t\t\t},\n\t\t\t\t{\n                  \"timesheetItemId\": \"3\",\n\t\t\t\t    \"projectName\": \"4\",\n\t\t\t\t    \"projectId\": \"4\",\n\t\t\t\t    \"activityName\": \"Tournement\",\n\t\t\t\t    \"activityId\": \"6\",\n\t\t\t\t    \"date\": \"2017-06-28\",\n\t\t\t\t    \"duration\": \"21600\",\n\t\t\t\t    \"comment\": null\n\t\t\t\t},\n\t\t\t\t{\n                  \"timesheetItemId\": \"4\",\n\t\t\t\t    \"projectName\": \"4\",\n\t\t\t\t    \"projectId\": \"4\",\n\t\t\t\t    \"activityName\": \"Tournement\",\n\t\t\t\t    \"activityId\": \"6\",\n\t\t\t\t    \"date\": \"2017-06-29\",\n\t\t\t\t    \"duration\": \"21600\",\n\t\t\t\t    \"comment\": null\n\t\t\t\t}\n\n\t\t\t    ]\n\t\t\t}\n\t\t    ],\n\t\t    \"rels\": []\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 No Projects Found\n{\n  \"error\": [\"No TimeSheets Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/get-timesheet-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/activity",
    "title": "06.Save Activity",
    "name": "saveActivity",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Activity name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Activity Name Already Exists\n{\n  \"error\": [\"Activity Name Already Exists\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Project Found\n{\n  \"error\": [\"No Projects Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-activity-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/customer",
    "title": "02.Save Customer",
    "name": "saveCustomer",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Customer Already Exists\n{\n  \"error\": [\"Customer Already Exists\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-customers-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/project",
    "title": "10.Save Project",
    "name": "saveProject",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Project name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminIds",
            "description": "<p>project admin ids ( add up to 5 admin ids with comma separated ex 1,2,45,)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Customer Id Needed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Project Name Needed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-project-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "post",
    "url": "/employee/:id/timesheet",
    "title": "14.Save Timesheet",
    "name": "saveTimesheet",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timesheet start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Created\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 No Accessible Timesheets\n{\n  \"error\": [\"No Accessible Timesheets\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/save-timesheet-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/activity",
    "title": "07.Update Activity",
    "name": "updateActivity",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Activity name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Activity Name Already Exists\n{\n  \"error\": [\"Activity Name Already Exists\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Project Found\n{\n  \"error\": [\"No Projects Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/update-activity-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/customer",
    "title": "03.Update Customer",
    "name": "updateCustomer",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Customer Already Exists\n{\n  \"error\": [\"Customer Already Exists\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Customer Not Found\n{\n  \"error\": [\"Customer Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/update-customers-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/project",
    "title": "11.Update Project",
    "name": "updateProject",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Project name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminIds",
            "description": "<p>project admin ids ( add up to 5 admin ids with comma separated ex 1,2,45,)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Customer Id Needed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Project Name Needed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/update-project-end-point.php",
    "groupTitle": "Time",
    "description": "<p>Support access using OAuth2 access token created with <code>client_credentials</code> and <code>password</code> grant type</p> <p>Required scope: <code>admin</code></p> <p>Required scope by grant type;</p> <ul> <li><code>client_credentials</code>: No need to request scopes. By default grant only for <code>admin</code> scope</li> <li><code>password</code>: Required <code>admin</code> scope <code>Since OrangeHRM 4.5</code></li> </ul>"
  },
  {
    "type": "put",
    "url": "/employee/:id/timesheet",
    "title": "15.Update Timesheet",
    "name": "updateTimesheet",
    "group": "Time",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timesheet start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Timesheet status (NOT SUBMITTED,SUBMITTED,APPROVED,REJECTED).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment when changing the timesheet status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>Activity id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId0",
            "description": "<p>First timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "0",
            "description": "<p>First timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId1",
            "description": "<p>Second timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "1",
            "description": "<p>Second timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId2",
            "description": "<p>Third timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "2",
            "description": "<p>Third timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId3",
            "description": "<p>4th timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "3",
            "description": "<p>4th timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId4",
            "description": "<p>5th timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "4",
            "description": "<p>5th timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId5",
            "description": "<p>6th timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "5",
            "description": "<p>6th timesheet item duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimesheetItemId6",
            "description": "<p>7th timesheet item value should be timesheet item ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "6",
            "description": "<p>7th timesheet item duration.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": ":",
          "content": "{\n\"startDate\":\"2017-06-26\",\n\"state\":\"INITIAL\",\n\"comment\":\"Initial update\",\n\"timeSheetItems\":[\n   {\n      \"projectId\":\"1\",\n      \"projectActivityId\":\"1\",\n      \"0\":\"4:00\",\n      \"TimesheetItemId0\":\"1\",\n      \"1\":\"4:00\",\n      \"TimesheetItemId1\":\"2\",\n      \"2\":\"5:00\",\n      \"TimesheetItemId2\":\"3\",\n      \"3\":\"5:00\",\n      \"TimesheetItemId3\":\"4\",\n      \"4\":\"5:00\",\n      \"TimesheetItemId4\":\"5\",\n      \"5\":\"\",\n      \"TimesheetItemId5\":\"\",\n      \"6\":\"\",\n      \"TimesheetItemId6\":\"\"\n   }",
          "type": "json"
        }
      ]
    },
    "description": "<p>NOTE data should be row Json and should be formatted as following given example,Sample Data Input Timesheet items TimesheetItemId0-TimesheetItemId6 should be presented and values should be given as [0 -6] in time format ex 8:00 ( duration ),To add a new row project id and activity id needed and timesheet item values should be empty (&quot;&quot;)..</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>Parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 No Accessible Timesheets\n{\n  \"error\": [\"No Accessible Timesheets\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/update-timesheet-end-point.php",
    "groupTitle": "Time"
  },
  {
    "type": "post",
    "url": "/leave/leave-request/:id",
    "title": "07.Change Leave Request Status",
    "name": "changeLeaveRequestStatus",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'changeStatus'",
              "'comment'"
            ],
            "optional": false,
            "field": "actionType",
            "description": "<p>Action type on leave request</p> <p>Note : If <code>actionType</code> is &quot;changeStatus&quot;, <code>status</code> fields must be filled. If <code>actionType</code> is &quot;comment&quot;, <code>comment</code> fields must be filled.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'Approve'",
              "'Reject'",
              "'Cancel'"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Status to be changed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment text</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": \"Successfully Saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/7-change-leave-request-status-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "get",
    "url": "/employees",
    "title": "11.Get Accessible Employees",
    "name": "getAccessibleEmployees",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "actionName",
            "description": "<p>Action name. e.g. <code>assign_leave</code>, <code>view_leave_list</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "properties[]",
            "description": "<p>Employee properties array. e.g. <code>employeeId</code>, <code>firstName</code>, <code>lastName</code>, <code>termination_id</code>.</p> <pre class=\"prettyprint\">/api/v1/employees?properties[]=firstName&properties[]=lastName&properties[]=termination_id </code></pre>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "pastEmployee",
            "description": "<p>Specify whether with past employee. Default <code>false</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n      {\n        \"employeeId\": \"4\",\n        \"firstName\": \"Kevin\",\n        \"lastName\": \"Mathews\",\n        \"employeeId\": \"004\",\n      },\n      {\n        \"employeeId\": \"5\",\n        \"firstName\": \"Linda\",\n        \"lastName\": \"Jane\",\n        \"employeeId\": \"005\",\n      }\n    ]\n  ],\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": {\n    \"status\": \"202\",\n    \"text\": \"Invalid `<param>` Value\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/11-get-accessible-employees-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "get",
    "url": "/leave/leave-list",
    "title": "05.Get Leave List",
    "name": "getLeaveList",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>From date (default current leave period from date)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>To date (default current leave period to date)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "rejected",
            "description": "<p>Leave status rejected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "cancelled",
            "description": "<p>Leave status cancelled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "pendingApproval",
            "description": "<p>Leave status pending approval</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "scheduled",
            "description": "<p>Leave status scheduled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "taken",
            "description": "<p>Leave status taken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "pastEmployee",
            "description": "<p>Past employee results</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "subunit",
            "description": "<p>Employee subunit id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Leave record limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Leave requests array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.employeeId",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveRequestId",
            "description": "<p>Leave request id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fromDate",
            "description": "<p>From date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.toDate",
            "description": "<p>To date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.appliedDate",
            "description": "<p>Applied date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBalance",
            "description": "<p>Leave balance</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.numberOfDays",
            "description": "<p>No of days</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBreakdown",
            "description": "<p>Leave breakdown string</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveType",
            "description": "<p>Leave type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.type",
            "description": "<p>Leave type name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.id",
            "description": "<p>Leave type id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n      {\n        \"employeeId\": \"4\",\n        \"employeeName\": \"Kevin Mathews\",\n        \"leaveRequestId\": \"8\",\n        \"fromDate\": \"2020-07-16\",\n        \"toDate\": \"2020-07-21\",\n        \"appliedDate\": \"2020-07-16\",\n        \"leaveBalance\": \"10.00\",\n        \"numberOfDays\": \"3.00\",\n        \"leaveBreakdown\": \"Scheduled(2.00)\",\n        \"leaveType\": {\n          \"type\": \"Annual\",\n          \"id\": \"2\"\n        }\n      },\n      {\n        \"employeeId\": \"5\",\n        \"employeeName\": \"Linda Jane\",\n        \"leaveRequestId\": \"3\",\n        \"fromDate\": \"2020-07-15\",\n        \"toDate\": \"2020-07-15\",\n        \"appliedDate\": \"2020-07-15\",\n        \"leaveBalance\": \"2.00\",\n        \"numberOfDays\": \"0.50\",\n        \"leaveBreakdown\": \"Pending Approval(0.50)\",\n        \"leaveType\": {\n          \"type\": \"Casual\",\n          \"id\": \"3\"\n        }\n      }\n    ]\n  ],\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/5-leave-list-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "get",
    "url": "/leave/leave-request/:id",
    "title": "06.Get Leave Request",
    "name": "getLeaveRequestById",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Leave request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.employeeId",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveRequestId",
            "description": "<p>Leave request id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fromDate",
            "description": "<p>From date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.toDate",
            "description": "<p>To date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.appliedDate",
            "description": "<p>Applied date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBalance",
            "description": "<p>Leave balance</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.numberOfDays",
            "description": "<p>No of days</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBreakdown",
            "description": "<p>Leave breakdown string</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.comments",
            "description": "<p>Leave request comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.user",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.comments.date",
            "description": "<p>Commented date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.time",
            "description": "<p>Commented time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.days",
            "description": "<p>Leaves</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.days.date",
            "description": "<p>Leave date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"REJECTED\"",
              "\"CANCELLED\"",
              "\"PENDING APPROVAL\"",
              "\"SCHEDULED\"",
              "\"TAKEN\"",
              "\"WEEKEND\"",
              "\"HOLIDAY\""
            ],
            "optional": false,
            "field": "data.days.status",
            "description": "<p>Leave status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.duration",
            "description": "<p>Duration (eg. 4.00)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.durationString",
            "description": "<p>Duration as string (eg.(09:00 - 13:00))</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.days.comments",
            "description": "<p>Leave comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.user",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.days.comments.date",
            "description": "<p>Commented date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.time",
            "description": "<p>Commented time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveType",
            "description": "<p>Leave type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.type",
            "description": "<p>Leave type name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.id",
            "description": "<p>Leave type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "'Approve'",
              "'Reject'",
              "'Cancel'"
            ],
            "optional": false,
            "field": "data.allowedActions",
            "description": "<p>Allowed actions on this leave request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": {\n        \"employeeId\": \"4\",\n        \"employeeName\": \"Kevin Mathews\",\n        \"leaveRequestId\": \"8\",\n        \"fromDate\": \"2020-07-16\",\n        \"toDate\": \"2020-07-21\",\n        \"appliedDate\": \"2020-07-16\",\n        \"leaveBalance\": \"10.00\",\n        \"numberOfDays\": \"3.00\",\n        \"comments\": {\n          \"user\": \"Kevin Mathews\",\n          \"date\": \"2020-06-25\",\n          \"time\": \"17:23:03\",\n          \"comment\": \"Comment\"\n        },\n        \"days\": [\n          {\n            \"date\": \"2020-07-20\",\n            \"status\": \"SCHEDULED\",\n            \"duration\": \"8.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-19\",\n            \"status\": \"WEEKEND\",\n            \"duration\": \"0.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-18\",\n            \"status\": \"WEEKEND\",\n            \"duration\": \"0.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-17\",\n            \"status\": \"SCHEDULED\",\n            \"duration\": \"8.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          }\n        ],\n        \"leaveBreakdown\": \"Scheduled(2.00)\",\n        \"leaveType\": {\n          \"type\": \"Annual\",\n          \"id\": \"2\"\n        },\n        \"allowedActions\": [\"Cancel\"]\n      }\n  ],\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/6-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "get",
    "url": "/myinfo",
    "title": "12.Employee Info",
    "name": "getMyInfo",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": true,
            "field": "withPhoto",
            "description": "<p>Specify whether with employee photo. Default <code>false</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "employee",
            "description": "<p>Employee details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeePhoto",
            "description": "<p>Base64 encoded employee picture.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n     \"data\": {\n       \"employee\": {\n         \"firstName\": \"Nina\",\n         \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\"\n       },\n       \"employeePhoto\": \"/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAY\",\n       \"user\": {\n         \"userName\":\"Nina\",\n         \"userRole\":\"ESS\",\n         \"isSupervisor\":true,\n         \"isProjectAdmin\":false,\n         \"isManager\":false,\n         \"isDirector\":false,\n         \"isAcceptor\":false,\n         \"isOfferer\":false,\n         \"isHiringManager\":false,\n         \"isInterviewer\":false,\n       }\n     }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 No Bound User\n{\n  \"error\": [\"No Bound User\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/12-get-my-info-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "get",
    "url": "/leave/my-leave-entitlement",
    "title": "01.Get My Leave Entitlements",
    "name": "myLeaveEntitlements",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>Valid leave period from date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>Valid leave period to date</p>"
          }
        ]
      }
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/1-my-leave-entitlement-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Entitlements array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Entitlement id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.validFrom",
            "description": "<p>From date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.validTo",
            "description": "<p>To date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.creditedDate",
            "description": "<p>Credited date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveBalance",
            "description": "<p>Leave balance object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.entitled",
            "description": "<p>Entitlement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.used",
            "description": "<p>Used leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.scheduled",
            "description": "<p>Scheduled leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.pending",
            "description": "<p>Pending leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.notLinked",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.taken",
            "description": "<p>Leave taken</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.adjustment",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.balance",
            "description": "<p>Leave balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveType",
            "description": "<p>Leave type object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.type",
            "description": "<p>Leave type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.id",
            "description": "<p>Leave type id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n      {\n        \"id\": \"1\",\n        \"validFrom\": \"2020-01-01\",\n        \"validTo\": \"2020-12-31\",\n        \"creditedDate\": \"2020-06-25\",\n        \"leaveBalance\": {\n          \"entitled\": 3,\n          \"used\": 1,\n          \"scheduled\": 0.5,\n          \"pending\": 0.5,\n          \"notLinked\": 0,\n          \"taken\": 0,\n          \"adjustment\": 0,\n          \"balance\": 2\n        },\n        \"leaveType\": {\n          \"type\": \"Annual\",\n          \"id\": \"2\"\n        }\n      },\n      {\n        \"id\": \"2\",\n        \"validFrom\": \"2020-01-01\",\n        \"validTo\": \"2020-12-31\",\n        \"creditedDate\": \"2020-06-20\",\n        \"leaveBalance\": {\n          \"entitled\": 2,\n          \"used\": 0.5,\n          \"scheduled\": 0.5,\n          \"pending\": 0,\n          \"notLinked\": 0,\n          \"taken\": 0,\n          \"adjustment\": 0,\n          \"balance\": 1.5\n        },\n        \"leaveType\": {\n          \"type\": \"Casual\",\n          \"id\": \"3\"\n        }\n      }\n    ]\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>No Records Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": {\n    \"status\": \"404\",\n    \"text\": \"No Records Found\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/leave/my-leave-request",
    "title": "02.Get My Leave Requests",
    "name": "myLeaveRequests",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>From date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>To date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Leave record limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Leave requests array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Leave request id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fromDate",
            "description": "<p>From date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.toDate",
            "description": "<p>To date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.appliedDate",
            "description": "<p>Applied date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveType",
            "description": "<p>Leave type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.type",
            "description": "<p>Leave type name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.id",
            "description": "<p>Leave type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBalance",
            "description": "<p>Leave balance</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.numberOfDays",
            "description": "<p>No of days</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveBreakdown",
            "description": "<p>Leave breakdown string</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.comments",
            "description": "<p>Leave request comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.user",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.comments.date",
            "description": "<p>Commented date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.time",
            "description": "<p>Commented time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.days",
            "description": "<p>Leaves</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.days.date",
            "description": "<p>Leave date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"REJECTED\"",
              "\"CANCELLED\"",
              "\"PENDING APPROVAL\"",
              "\"SCHEDULED\"",
              "\"TAKEN\"",
              "\"WEEKEND\"",
              "\"HOLIDAY\""
            ],
            "optional": false,
            "field": "data.days.status",
            "description": "<p>Leave status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.duration",
            "description": "<p>Duration (eg. 4.00)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.durationString",
            "description": "<p>Duration as string (eg.(09:00 - 13:00))</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.days.comments",
            "description": "<p>Leave comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.user",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.days.comments.date",
            "description": "<p>Commented date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.time",
            "description": "<p>Commented time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.days.comments.comment",
            "description": "<p>Comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n      {\n        \"id\": \"8\",\n        \"fromDate\": \"2020-07-16\",\n        \"toDate\": \"2020-07-21\",\n        \"appliedDate\": \"2020-07-16\",\n        \"leaveType\": {\n          \"type\": \"Annual\",\n          \"id\": \"2\"\n        },\n        \"leaveBalance\": \"10.00\",\n        \"numberOfDays\": \"3.00\",\n        \"comments\": {\n          \"user\": \"Employee Name\",\n          \"date\": \"2020-06-25\",\n          \"time\": \"17:23:03\",\n          \"comment\": \"Comment\"\n        },\n        \"days\": [\n          {\n            \"date\": \"2020-07-20\",\n            \"status\": \"SCHEDULED\",\n            \"duration\": \"8.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-19\",\n            \"status\": \"WEEKEND\",\n            \"duration\": \"0.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-18\",\n            \"status\": \"WEEKEND\",\n            \"duration\": \"0.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          },\n          {\n            \"date\": \"2020-07-17\",\n            \"status\": \"SCHEDULED\",\n            \"duration\": \"8.00\",\n            \"durationString\": \"\",\n            \"comments\": []\n          }\n        ],\n        \"leaveBreakdown\": \"Scheduled(2.00)\",\n      },\n      {\n        \"id\": \"3\",\n        \"fromDate\": \"2020-07-15\",\n        \"toDate\": \"2020-07-15\",\n        \"appliedDate\": \"2020-07-15\",\n        \"leaveType\": {\n          \"type\": \"Casual\",\n          \"id\": \"1\"\n        },\n        \"leaveBalance\": \"3.00\",\n        \"numberOfDays\": \"0.50\",\n        \"comments\": [],\n        \"days\": [\n          {\n            \"date\": \"2020-07-15\",\n            \"status\": \"PENDING APPROVAL\",\n            \"duration\": \"4.00\",\n            \"durationString\": \"(09:00 - 13:00)\",\n            \"comments\": []\n          }\n        ],\n        \"leaveBreakdown\": \"Pending Approval(0.50)\",\n      }\n    ]\n  ],\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>No Records Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": {\n    \"status\": \"404\",\n    \"text\": \"No Records Found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/2-my-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>"
  },
  {
    "type": "post",
    "url": "/leave/my-leave-request",
    "title": "04.Save My Leave Request (Multiple Day)",
    "name": "saveMyLeaveRequestMultipleDay",
    "group": "User",
    "version": "1.1.0",
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/4-save-my-multiple-day-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'all'",
              "'start'",
              "'end'",
              "'start_end'",
              "'none'"
            ],
            "optional": false,
            "field": "partialOption",
            "description": "<p>Partial day option</p> <p>Note : If partial option is 'all'  start day fields must be filled. If partial option is 'end'  end day fields must be filed. If partial option is 'start'  start day fields must be filed. If partial option is 'start_end'  start and end day fields must be filed. If partial option is 'none'  No partial option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "startDayType",
            "description": "<p>Start day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "startDayAMPM",
            "description": "<p>Half day morning or evening, required for  start day 'half_day'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayFromTime",
            "description": "<p>Start day from time for specify time(required for start day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayToTime",
            "description": "<p>Start day to time for specify time(required for start day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "endDayType",
            "description": "<p>End day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "endDayAMPM",
            "description": "<p>Half day morning or evening, required for end day 'half_day'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayFromTime",
            "description": "<p>End day from time for specify time(required for end day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayToTime",
            "description": "<p>End day to time for specify time (required for end day specifying time )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": \"Successfully Saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/leave/my-leave-request",
    "title": "03.Save My Leave Request (Single Day)",
    "name": "saveMyLeaveRequestSingleDay",
    "group": "User",
    "version": "1.1.0",
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/3-save-my-single-day-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "singleType",
            "description": "<p>Single day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "singleAMPM",
            "description": "<p>Half day morning or evening, (required for 'half_day')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleFromTime",
            "description": "<p>Single day from time for specify time ( required if specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleToTime",
            "description": "<p>Single day to time for specify time ( required if specifying time )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": \"Successfully Saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/subordinate/:id/leave-request",
    "title": "10.Save Subordinate Leave Request (Multiple Day)",
    "name": "saveSubordinateLeaveRequestMultipleDay",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Subordinate employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'all'",
              "'start'",
              "'end'",
              "'start_end'",
              "'none'"
            ],
            "optional": false,
            "field": "partialOption",
            "description": "<p>Partial day option</p> <p>Note : If partial option is 'all'  start day fields must be filled. If partial option is 'end'  end day fields must be filed. If partial option is 'start'  start day fields must be filed. If partial option is 'start_end'  start and end day fields must be filed. If partial option is 'none'  No partial option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "startDayType",
            "description": "<p>Start day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "startDayAMPM",
            "description": "<p>Half day morning or evening, required for  start day 'half_day'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayFromTime",
            "description": "<p>Start day from time for specify time(required for start day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDayToTime",
            "description": "<p>Start day to time for specify time(required for start day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "endDayType",
            "description": "<p>End day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "endDayAMPM",
            "description": "<p>Half day morning or evening, required for end day 'half_day'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayFromTime",
            "description": "<p>End day from time for specify time(required for end day specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayToTime",
            "description": "<p>End day to time for specify time (required for end day specifying time )</p>"
          }
        ]
      }
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/10-save-subordinate-multiple-day-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": \"Successfully Saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/subordinate/:id/leave-request",
    "title": "09.Save Subordinate Leave Request (Single Day)",
    "name": "saveSubordinateLeaveRequestSingleDay",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Subordinate employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'half_day'",
              "'full_day'",
              "'specify_time'"
            ],
            "optional": false,
            "field": "singleType",
            "description": "<p>Single day leave applying type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'AM'",
              "'PM'"
            ],
            "optional": false,
            "field": "singleAMPM",
            "description": "<p>Half day morning or evening, (required for 'half_day')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleFromTime",
            "description": "<p>Single day from time for specify time ( required if specifying time )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleToTime",
            "description": "<p>Single day to time for specify time ( required if specifying time )</p>"
          }
        ]
      }
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/9-save-subordinate-single-day-leave-request-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"success\": \"Successfully Saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/subordinate/:id/leave-entitlement",
    "title": "08.Get Subordinate Leave Entitlements",
    "name": "subordinateLeaveEntitlements",
    "group": "User",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Subordinate employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>Valid leave period from date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>Valid leave period to date</p>"
          }
        ]
      }
    },
    "filename": "/mnt/4db39c28-207e-4dcf-87e0-00c41bff1b84/OHRM/dev-repos/orangehrm-4.4/symfony/plugins/orangehrmRESTPlugin/doc/user/8-subordinate-leave-entitlement-end-point.php",
    "groupTitle": "User",
    "description": "<p>Required access using OAuth2 access token created with <code>password</code> grant type</p> <p>Required scope: <code>user</code></p> <p><code>Since OrangeHRM 4.5</code></p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Entitlements array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Entitlement id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.validFrom",
            "description": "<p>From date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.validTo",
            "description": "<p>To date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.creditedDate",
            "description": "<p>Credited date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveBalance",
            "description": "<p>Leave balance object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.entitled",
            "description": "<p>Entitlement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.used",
            "description": "<p>Used leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.scheduled",
            "description": "<p>Scheduled leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.pending",
            "description": "<p>Pending leave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.notLinked",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.taken",
            "description": "<p>Leave taken</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.adjustment",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.leaveBalance.balance",
            "description": "<p>Leave balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.leaveType",
            "description": "<p>Leave type object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.type",
            "description": "<p>Leave type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.leaveType.id",
            "description": "<p>Leave type id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"data\": [\n      {\n        \"id\": \"1\",\n        \"validFrom\": \"2020-01-01\",\n        \"validTo\": \"2020-12-31\",\n        \"creditedDate\": \"2020-06-25\",\n        \"leaveBalance\": {\n          \"entitled\": 3,\n          \"used\": 1,\n          \"scheduled\": 0.5,\n          \"pending\": 0.5,\n          \"notLinked\": 0,\n          \"taken\": 0,\n          \"adjustment\": 0,\n          \"balance\": 2\n        },\n        \"leaveType\": {\n          \"type\": \"Annual\",\n          \"id\": \"2\"\n        }\n      },\n      {\n        \"id\": \"2\",\n        \"validFrom\": \"2020-01-01\",\n        \"validTo\": \"2020-12-31\",\n        \"creditedDate\": \"2020-06-20\",\n        \"leaveBalance\": {\n          \"entitled\": 2,\n          \"used\": 0.5,\n          \"scheduled\": 0.5,\n          \"pending\": 0,\n          \"notLinked\": 0,\n          \"taken\": 0,\n          \"adjustment\": 0,\n          \"balance\": 1.5\n        },\n        \"leaveType\": {\n          \"type\": \"Casual\",\n          \"id\": \"3\"\n        }\n      }\n    ]\n  \"rels\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>No Records Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": {\n    \"status\": \"404\",\n    \"text\": \"No Records Found\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
