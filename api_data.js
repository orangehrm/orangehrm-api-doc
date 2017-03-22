define({ "api": [
  {
    "type": "get",
    "url": "/employee/:id/dependent",
    "title": "09.Employee Dependents",
    "name": "GetEmployeeDependents",
    "group": "Employee",
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
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n     {\n        \"name\": \"Inu Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"1989-09-02\"\n     },\n     {\n        \"name\": \"Sam Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"2009-09-02\"\n     }\n    ],\n  \"rels\": {\n  }\n}",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/9-employee-dependent-end-point.php",
    "groupTitle": "Employee"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/2-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/job-detail",
    "title": "13.Employee Job Detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/13-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/job-detail",
    "title": "14.Save Employee Job Detail",
    "name": "SaveEmployeeJobDetails",
    "group": "Employee",
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
            "field": "title",
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/14-save-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/search",
    "title": "05.Employee Search",
    "name": "SearchEmployee",
    "group": "Employee",
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
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Employee status.</p>"
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
            "type": "String",
            "optional": true,
            "field": "jobTitle",
            "description": "<p>Employee job title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit.</p>"
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/5.employee-search-end-point.php",
    "groupTitle": "Employee"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/3-update-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/dependent",
    "title": "10.Delete Employee Dependents",
    "name": "deleteEmployeeDependents",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/10-delete-employee-dependents-end-point.php",
    "groupTitle": "Employee"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/18-delete-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "06.Employee Contact Detail",
    "name": "getEmployeeContactDetails",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/6-employee-contact-end-point.php",
    "groupTitle": "Employee"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/16-get-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
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
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>Employee id.</p>"
          },
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/1-save-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/contact-detail",
    "title": "07.Save Employee Contact Detail",
    "name": "saveEmployeeContactDetails",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/7-save-employee-contact-end-point.php",
    "groupTitle": "Employee"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/17-save-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/dependent",
    "title": "12.Save Employee Dependent",
    "name": "saveEmployee_dependents",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/12-save-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "employee/:id/action/terminate",
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/4-terminate-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/contact-detail",
    "title": "08.Update Employee Contact Detail",
    "name": "updateEmployeeContactDetails",
    "group": "Employee",
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/8-update-employee-contact-details-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/dependent",
    "title": "11.Update Employee Dependents",
    "name": "updateEmployeeDependents",
    "group": "Employee",
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
            "description": "<p>relationship of the dependent.</p>"
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/11-update-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/job-detail",
    "title": "15.Update Employee Job Detail",
    "name": "updateEmployeeJobDetails",
    "group": "Employee",
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
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
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
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/15-update-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Supervisor name.</p>"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/19-update-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/api/v1/employee/:id/entitlement",
    "title": "4.Get Employee Leave Entitlement",
    "name": "employeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "leaveType",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
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
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Number of Days.</p>"
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
          "content": "HTTP/1.1 200 OK\n\n\n   {\n   \"data\": [\n   {\n   \"id\": \"2\",\n   \"type\": \"1\",\n   \"validFrom\": \"2017-01-01 00:00:00\",\n   \"validTo\": \"2018-02-28 00:00:00\",\n   \"days\": \"10.0\"\n   }\n   ],\n   \"rels\": []\n   }",
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/api/v1/leave/type",
    "title": "2.Get Employee Leave Requests",
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
            "optional": true,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Leave id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Requested date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "comments",
            "description": "<p>Leave comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "Strung",
            "optional": true,
            "field": "action",
            "description": "<p>Leave Action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"type\": \"Annual\",\n      \"id\": \"2\",\n      \"date\": \"2017-03-31\",\n      \"$leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n      \"status\": 2,\n      \"comments\": [\n               {\n               \"commentId\": \"3\",\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Test\"\n               },\n               {\n               \"commentId\": \"1\",\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"Test\"\n               }\n      \"action\": null\n }",
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-requests-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/api/v1/leave/type",
    "title": "1.Leave Types",
    "name": "leaveTypes",
    "group": "Leave",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Leave id.</p>"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/leave-types-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/api/v1/employee/:id/entitlement",
    "title": "5.Save Employee Leave Entitlement",
    "name": "saveEmployeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leaveType",
            "description": "<p>Leave type.</p>"
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/api/v1/leave/type",
    "title": "3.Search Leave Requests",
    "name": "searchLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reject",
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
            "description": "<p>Past Employee results ( 'true' /'false').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subunit",
            "description": "<p>Employee Subunit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Number of records per page.</p>"
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
            "optional": true,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Leave id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Requested date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "comments",
            "description": "<p>Leave comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "Strung",
            "optional": true,
            "field": "action",
            "description": "<p>Leave Action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"type\": \"Annual\",\n      \"id\": \"2\",\n      \"date\": \"2017-03-31\",\n      \"$leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n      \"status\": 2,\n      \"comments\": {},\n      \"action\": null\n }",
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/search-leave-requests-end-point.php",
    "groupTitle": "Leave"
  }
] });
