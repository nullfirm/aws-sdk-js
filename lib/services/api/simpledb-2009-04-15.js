/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'query',
  apiVersion: '2009-04-15',
  endpointPrefix: 'sdb',
  resultWrapped: true,
  serviceFullName: 'Amazon SimpleDB',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    batchDeleteAttributes: {
      name: 'BatchDeleteAttributes',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                  required: true,
                  name: 'ItemName'
                },
                Attributes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Name: {
                        required: true
                      },
                      AlternateNameEncoding: {
                      },
                      Value: {
                        required: true
                      },
                      AlternateValueEncoding: {
                      }
                    },
                    name: 'Attribute'
                  },
                  flattened: true
                }
              },
              name: 'Item'
            },
            flattened: true,
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    batchPutAttributes: {
      name: 'BatchPutAttributes',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                  required: true,
                  name: 'ItemName'
                },
                Attributes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Name: {
                        required: true
                      },
                      Value: {
                        required: true
                      },
                      Replace: {
                        type: 'boolean'
                      }
                    },
                    name: 'Attribute'
                  },
                  flattened: true,
                  required: true
                }
              },
              name: 'Item'
            },
            flattened: true,
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createDomain: {
      name: 'CreateDomain',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteAttributes: {
      name: 'DeleteAttributes',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          },
          ItemName: {
            required: true
          },
          Attributes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                  required: true
                },
                AlternateNameEncoding: {
                },
                Value: {
                  required: true
                },
                AlternateValueEncoding: {
                }
              },
              name: 'Attribute'
            },
            flattened: true
          },
          Expected: {
            type: 'structure',
            members: {
              Name: {
              },
              Value: {
              },
              Exists: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteDomain: {
      name: 'DeleteDomain',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    domainMetadata: {
      name: 'DomainMetadata',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ItemCount: {
            type: 'integer'
          },
          ItemNamesSizeBytes: {
            type: 'integer'
          },
          AttributeNameCount: {
            type: 'integer'
          },
          AttributeNamesSizeBytes: {
            type: 'integer'
          },
          AttributeValueCount: {
            type: 'integer'
          },
          AttributeValuesSizeBytes: {
            type: 'integer'
          },
          Timestamp: {
            type: 'integer'
          }
        }
      }
    },
    getAttributes: {
      name: 'GetAttributes',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          },
          ItemName: {
            required: true
          },
          AttributeNames: {
            type: 'list',
            members: {
              name: 'AttributeName'
            },
            flattened: true
          },
          ConsistentRead: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attribute: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                AlternateNameEncoding: {
                },
                Value: {
                },
                AlternateValueEncoding: {
                }
              },
              name: 'Attribute'
            },
            flattened: true,
            name: 'Attributes'
          }
        }
      }
    },
    listDomains: {
      name: 'ListDomains',
      input: {
        type: 'structure',
        members: {
          MaxNumberOfDomains: {
            type: 'integer'
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DomainName: {
            type: 'list',
            members: {
              name: 'DomainName'
            },
            flattened: true,
            name: 'DomainNames'
          },
          NextToken: {
          }
        }
      }
    },
    putAttributes: {
      name: 'PutAttributes',
      input: {
        type: 'structure',
        members: {
          DomainName: {
            required: true
          },
          ItemName: {
            required: true
          },
          Attributes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                  required: true
                },
                Value: {
                  required: true
                },
                Replace: {
                  type: 'boolean'
                }
              },
              name: 'Attribute'
            },
            flattened: true,
            required: true
          },
          Expected: {
            type: 'structure',
            members: {
              Name: {
              },
              Value: {
              },
              Exists: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    select: {
      name: 'Select',
      input: {
        type: 'structure',
        members: {
          SelectExpression: {
            required: true
          },
          NextToken: {
          },
          ConsistentRead: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Item: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                AlternateNameEncoding: {
                },
                Attribute: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Name: {
                      },
                      AlternateNameEncoding: {
                      },
                      Value: {
                      },
                      AlternateValueEncoding: {
                      }
                    },
                    name: 'Attribute'
                  },
                  flattened: true,
                  name: 'Attributes'
                }
              },
              name: 'Item'
            },
            flattened: true,
            name: 'Items'
          },
          NextToken: {
          }
        }
      }
    }
  },
  pagination: {
    listDomains: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      limitKey: 'MaxNumberOfDomains',
      resultKey: 'DomainNames'
    },
    select: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      resultKey: 'Items'
    }
  }
};
