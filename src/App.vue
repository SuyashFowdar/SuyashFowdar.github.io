<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;

  .links {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);

  .links {
    transform: translate(15vw, -15vw);
  }
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);

  .links {
    transform: translate(-15vw, 15vw);
  }
}

* {
  box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: Arial, Helvetica, sans-serif;
}

a {
	color: inherit;
	text-decoration: none;
}

.clickable {
	color: inherit;

	&:hover {
		border-radius: 3px;
		background-color: rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.3);
	}
}

$all:('', 0, 4000px);
$sm:('-sm', 0, 600px);
$lg:('-lg', 601px, 4000px);

$breakpoints: ($all, $sm, $lg);

@mixin sm {
	@media screen and (min-width: nth($sm, 2)) and (max-width: nth($sm, 3)) {
		@content;
	}
}

@mixin lg {
	@media screen and (min-width: nth($lg, 2)) and (max-width: nth($lg, 3)) {
		@content;
	}
}

@each $breakpoint in $breakpoints {
	$point: nth($breakpoint, 1);
  $min: nth($breakpoint, 2);
	$max: nth($breakpoint, 3);
	
  @media screen and (min-width: $min) and (max-width: $max) {
    .hide#{$point} {
      display: none;
    }

    .col#{$point},
    .col-reverse#{$point},
    .row#{$point} {
      display: flex;
    }

    .col#{$point} {
      flex-direction: column;
		}
		
		.col-reverse#{$point} {
			flex-direction: column-reverse;
		}

    .main-center#{$point} {
      justify-content: center;
    }

    .main-start#{$point} {
      justify-content: flex-start;
    }

    .main-end#{$point} {
      justify-content: flex-end;
    }

    .main-space-between#{$point} {
      justify-content: space-between;
    }

    .main-space-around#{$point} {
      justify-content: space-around;
    }

    .cross-center#{$point} {
      align-items: center;
    }

    .cross-start#{$point} {
      align-items: flex-start;
    }

    .cross-end#{$point} {
      align-items: flex-end;
    }

    .cross-baseline#{$point} {
      align-items: baseline;
    }

    .flex#{$point} {
      flex: 1 1;
    }

    .wrap#{$point} {
      flex-wrap: wrap;
    }

    .h-100#{$point} {
      height: 100%;
    }

		.shadow-15#{$point} {
			box-shadow: 0px 0px 15px 0px rgb(100, 100, 100);
		}
		
		.layout-padding8#{$point} {
			&>div,
			&>b,
			&>button,
			&>a,
			&>input {
				padding: 8px;
			}
		}
		
		.layout-padding4#{$point} {
			&>div,
			&>b,
			&>button,
			&>a,
			&>input {
				padding: 4px;
			}
		}
		
		.layout-margin8#{$point} {
			&>div,
			&>b,
			&>button,
			&>a,
			&>input {
				margin: 8px;
			}
		}
		
		.layout-margin4#{$point} {
			&>div,
			&>b,
			&>button,
			&>a,
			&>input {
				margin: 4px;
			}
		}

    @for $i from 1 through 20 {
      $width: percentage($i*5/100);

      .w-#{$i*5}#{$point} {
        width: $width;
      }
    }
	}
}

@keyframes blink {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}

@keyframes appear {
	from { opacity: 0; }
	to { opacity: 1; }
}

@keyframes disappear {
	from { opacity: 1; }
	to { opacity: 0; }
}

.dark {
	background-color: rgb(50, 50, 50);
	color: rgb(240, 240, 240);

	.clickable:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
}

.current-link {
	font-weight: bold;
	cursor: default !important;
}

.container {
	main {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 104px);

		@include lg {
			margin-top: 40px;
		}

		@include sm {
			margin-top: 64px;
		}

		.section {
			h3 {
				margin: 0;
			}

			ul {
				margin: 20px 0;
				padding: 0;
				list-style-type: none;

				li {
					margin-bottom: 10px;
				}
			}
		}
	}

	header {
		position: fixed;
		background-color: white;
		transition: all 0.5s;
		z-index: 2;

		&.even-color {
			@extend .dark;
		}

		@include sm {
			bottom: 0;
		}

		a {
			height: 40px;
			transition: all 1s;

			@include lg {
				width: 150px;
			}

			@include sm {
				width: 100%;
			}
		}
	}
}

.me {
  main {
    max-height: calc(100vh - 40px);
  }

  footer {
    display: none;
  }
}

.projects footer {
  background-color: white;
}

.skills footer {
  @extend .dark;
}

.skills footer,
.projects footer {
  @include lg {
    bottom: 0;
  }

  @extend .shadow-15;
  @extend .w-100;
}

footer {
	padding: 16px 0;
  z-index: 2;
  transition: all 0.5s;
  position: fixed;

	@include sm {
		margin-bottom: 40px;
	}

	& > div a {
		margin: 0 16px;
    transition: all 0.5s;
    animation-name: appear;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;

		&:last-child {
			font-weight: bold;
			padding: 10px;
		}
	}
}

</style>
