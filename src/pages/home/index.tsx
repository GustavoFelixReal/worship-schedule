import Child from '@src/components/Child';
import React, { useState } from 'react';
import { Container } from './styles';

export default function Application() {
  return (
    <Container>
        <h1>Hello World!!</h1>
        <Child />
    </Container>
  );
}