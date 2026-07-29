---
layout: post
title: FSAE Autonomous Track Guidance System
description: Monocular camera perception pipeline using YOLOv8 CNN for track cone detection and trajectory generation on a Formula Student car.
skills:
  - Python
  - YOLOv8 / CNN
  - Computer Vision
  - Path Planning
  - Autonomous Perception
main-image: /fsae-autonomous.jpg
---

## Overview

Developed a vision-based autonomous perception and guidance system designed to identify track cones and generate real-time drivable paths for a Formula Student car[cite: 1].

## Key Features

- **Object Detection:** Trained and deployed a YOLOv8 CNN model on monocular camera feeds to accurately detect track boundary cones[cite: 1].
- **Path Planning:** Implemented midline estimation algorithms combined with polynomial trajectory smoothing and filtering[cite: 1].
- **Results:** Achieved up to **95% track coverage** in real-world testing video evaluation[cite: 1].