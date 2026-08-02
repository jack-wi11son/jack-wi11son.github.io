---
layout: post
title: Fitness Monitor Firmware Restructure
description: Refactored legacy embedded firmware into a clean, modular HAL-driver application architecture with automated CI/CD testing.
skills:
  - Firmware Architecture
  - Hardware Abstraction Layer (HAL)
  - C/C++
  - Git / CI/CD Pipelines
  - Unit Testing
main-image: /firmware.png
---

## Overview

Refactored existing monolithic embedded firmware into a layered, modular architecture to improve system stability, scalability, and code maintainability.

## Key Deliverables

- Separated system code cleanly into Hardware Abstraction Layer (HAL), hardware drivers, and top-level application logic layers.
- Integrated automated unit testing suites within GitHub Actions CI/CD pipelines for automated build validation.