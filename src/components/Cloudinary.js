import React, { Component } from 'react';
import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from 'react-cloudinary';

cloudinaryConfig({cloud_name: 'f2083'});
const imagePublicId = '20160508_132500_yvicll';
<CloudinaryImage publicId={imagePublicId} options={{ width: 300, height: 300 }} />