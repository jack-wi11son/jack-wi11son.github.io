---
layout: post
title: Dual-Axis Helicopter Flight Controller
description: Real-time PID altitude and yaw controller on a Tiva TM4C123G MCU using ADC circular buffers and quadrature encoder decoding.
skills:
  - Embedded C
  - Tiva TM4C123G
  - Real-Time PID Control
  - Interrupt Handlers & ADC
main-image: /tiva-tm4.png
---

## Overview

Programmed a real-time embedded control system to regulate the altitude and yaw position of a dual-rotor benchmark helicopter model.

## Implementation Details

- **Sensor Acquisition:** Implemented ADC circular buffers for continuous altitude feedback and interrupt-based quadrature encoder decoding for yaw tracking.
- **Control Strategy:** Tuned dual PID loops to maintain stability and execute precise setpoint changes.
- **Tooling:** Programmed in C within Code Composer Studio (CCS) and version-controlled using Git.