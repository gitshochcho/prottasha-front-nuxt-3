<script setup>
	// const { admin_user = {} } = adminAuth()

	const isMobileMenuOpen = ref(false)
	const isScrolled = ref(false)
	const isOverflowMenuOpen = ref(false)

	// Track which mobile dropdowns are open
	const openMobileDropdowns = ref({})

	// // API response data
	const apiMenuData = ref({
		status: true,
		message: "Success.",
		data: {
			data: [
				{
					id: 1,
					node_name: "হোম",
					pid: 0,
					route_name: "/",
					route_location: "#",
					serials: 1,
					status: 1,
					icon: "fas fa-newspaper",
					menus: [],
				},
				{
					id: 2,
					node_name: "আমাদের সম্পর্কে",
					pid: 0,
					route_name: "/about",
					route_location: null,
					serials: 4,
					status: 1,
					icon: "fas fa-newspaper",
					menus: [],
				},
				{
					id: 38,
					node_name: "আমাদের সেবাসমূহ",
					pid: 0,
					route_name: "/services",
					route_location: "/admin-panel/stories",
					serials: 7,
					status: 1,
					icon: "far fa-bookmark",
					menus: [],
				},
				{
					id: 3,
					node_name: "সাফল্যের গল্প",
					pid: 0,
					route_name: "/success-story",
					route_location: "#",
					serials: 8,
					status: 1,
					icon: "fab fa-searchengin",
					menus: [],
				},
				{
					id: 16,
					node_name: "আর্থিক স্বচ্ছতা ও নিরীক্ষা",
					pid: 0,
					route_name: "/financial-info",
					route_location: "#",
					serials: 10,
					status: 1,
					icon: "fas fa-bullhorn",
					menus: [],
				},
				{
					id: 6,
					node_name: "আমাদের সাথে সম্পৃক্ত হোন",
					pid: 0,
					route_name: "/admin-panel/menu-setup",
					route_location: "#",
					serials: 17,
					status: 1,
					icon: "fa-solid fa-gears",
					menus: [],
				},
				{
					id: 13,
					node_name: "যোগাযোগ",
					pid: 0,
					route_name: "/admin-panel/social-links",
					route_location: "/admin-panel/social-links",
					serials: 34,
					status: 1,
					icon: "fas fa-link",
					menus: [],
				},
			],
		},
	})

	//    const apiMenuData = ref(null);
	const loading = ref(false)
	const error = ref(null)

	// Transform data to menu format
	const menuItems = computed(() => {
		// Check if we have data in the proper format
		if (!apiMenuData.value?.data?.data) {
			console.log("Menu data not available yet:", apiMenuData.value)
			return []
		}

		function mapMenu(items) {
			return items
				.filter((item) => item.status === 1 || item.status === "1") // Support both number and string
				.sort((a, b) => Number(a.serials) - Number(b.serials)) // Convert to number for comparison
				.map((item) => {
					const menuItem = {
						name: item.node_name,
						path: item.route_name,
						icon: item.icon,
						id: item.id,
					}
					if (Array.isArray(item.menus) && item.menus.length > 0) {
						menuItem.children = mapMenu(item.menus)
					}
					return menuItem
				})
		}

		return mapMenu(apiMenuData.value.data.data)
	})

	// Toggle mobile dropdown menu
	const toggleMobileDropdown = (itemName) => {
		openMobileDropdowns.value = {
			...openMobileDropdowns.value,
			[itemName]: !openMobileDropdowns.value[itemName],
		}
	}

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 0
	}

	const toggleMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value
	}

	const toggleOverflowMenu = () => {
		isOverflowMenuOpen.value = !isOverflowMenuOpen.value
	}

	const closeOverflowMenu = () => {
		isOverflowMenuOpen.value = false
	}

	// Watch for mobile menu state changes
	watch(isMobileMenuOpen, (newValue) => {
		document.body.style.overflow = newValue ? "hidden" : "auto"
	})

	onMounted(() => {
		// loadData();
		window.addEventListener("scroll", handleScroll)
		// Close overflow menu on outside click
		document.addEventListener("click", (e) => {
			const overflowContainer = document.getElementById("overflow-menu-container")
			const overflowButton = document.getElementById("overflow-menu-button")
			if (isOverflowMenuOpen.value && overflowContainer && overflowButton && !overflowContainer.contains(e.target) && !overflowButton.contains(e.target)) {
				closeOverflowMenu()
			}
		})
	})

	// Clean up event listeners
	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll)
	})
</script>

<template>
	<nav
		:class="[
			'fixed top-0 w-full transition-all duration-300 z-50 ',
			isScrolled ? 'py-2 bg-white/95 shadow-md dark:bg-gray-900/95' : 'py-4 bg-white dark:bg-gray-900',
		]">
		<div class="flex items-center justify-between container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
			<!-- logo portion -->
			<NuxtLink to="/" :class="['transition-transform duration-300', isScrolled ? 'scale-90' : 'scale-100']">
				<ApplicationLogo :width="'100%'" :height="isScrolled ? '40px' : '50px'" />
			</NuxtLink>

			<div class="flex items-center">
				<!-- Desktop Menu -->
				<div class="items-center hidden lg:flex lg:justify-between">
					<!-- Primary Menu Items -->
					<div class="flex space-x-2">
						<div v-for="item in menuItems" :key="item.id" class="relative group">
							<NuxtLink
								v-if="!item.children || item.children.length === 0"
								:to="item.path"
								:class="[
									'block rounded px-2 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center',
									$route.path === item.path ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
								]">
								<!-- <i v-if="item.icon" :class="[item.icon, 'mr-2 text-sm']"></i> -->
								{{ item.name }}
							</NuxtLink>

							<!-- Dropdown for items with children -->
							<div v-else>
								<button
									:class="[
										'block rounded px-2 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center',
										$route.path.startsWith(item.path) ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
									]">
									<!-- <i v-if="item.icon" :class="[item.icon, 'mr-2 text-sm']"></i> -->
									{{ item.name }}
									<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
											clip-rule="evenodd" />
									</svg>
								</button>

								<!-- Dropdown Menu -->
								<div class="absolute left-0 z-20 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-md min-w-max">
									<NuxtLink
										v-for="child in item.children"
										:key="child.id"
										:to="child.path"
										class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
										<!-- <i v-if="child.icon" :class="[child.icon, 'mr-2 text-sm']"></i> -->
										{{ child.name }}
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA Buttons & Hamburger -->
				<div class="flex items-between space-x-4">
					<!-- <NuxtLink
						v-if="admin_user"
						to="/admin-panel"
						:class="[
							'hidden lg:block transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700',
							isScrolled ? 'text-sm px-10 py-1.5' : 'text-base px-10 py-2',
						]">
						Admin Panel
					</NuxtLink> -->

					<!-- Hamburger Menu -->
					<button class="p-2 lg:hidden" @click="toggleMenu" aria-label="Toggle Menu">
						<img src="/svg/homepage/menu_hamburger.svg" alt="Menu" class="w-6 h-6 dark:invert" />
					</button>
					<!-- <ColorMode /> -->
				</div>
			</div>
		</div>

		<!-- Mobile Menu (Fully Tailwind Animated) -->
		<div
			:class="[
				'fixed lg:hidden md:hidden block inset-y-0 right-0 w-64 bg-white shadow-lg dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto',
				isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
			]">
			<div class="flex flex-col p-4">
				<button @click="toggleMenu" class="self-end p-2 mb-4 text-gray-600 dark:text-gray-300" aria-label="Close Menu">✕</button>

				<!-- Mobile menu items -->
				<div v-for="item in menuItems" :key="item.id" class="mb-1">
					<!-- Regular menu item -->
					<NuxtLink
						v-if="!item.children || item.children.length === 0"
						:to="item.path"
						:class="[
							'block py-3 px-4 rounded-lg transition-all duration-300 flex items-center',
							'hover:bg-gray-100 dark:hover:bg-gray-700',
							isScrolled ? 'text-sm' : 'text-base',
							$route.path === item.path ? 'text-custom_blue font-semibold bg-blue-50 dark:bg-blue-900/50' : 'text-gray-700 dark:text-gray-200',
						]"
						@click="toggleMenu">
						<!-- <i v-if="item.icon" :class="[item.icon, 'mr-2 text-sm']"></i> -->
						{{ item.name }}
					</NuxtLink>

					<!-- Menu item with dropdown -->
					<div v-else class="mb-1">
						<button
							@click="toggleMobileDropdown(item.name)"
							:class="[
								'w-full rounded py-3 px-4 text-left transition-all duration-300 flex items-center justify-between',
								'hover:bg-gray-100 dark:hover:bg-gray-700',
								$route.path.startsWith(item.path) ? 'text-custom_blue font-semibold' : 'text-gray-700 dark:text-gray-200',
							]">
							<div class="flex items-center">
								<!-- <i v-if="item.icon" :class="[item.icon, 'mr-2 text-sm']"></i> -->
								{{ item.name }}
							</div>
							<svg
								class="w-4 h-4 transition-transform duration-300"
								:class="{ 'rotate-180': openMobileDropdowns[item.name] }"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
									clip-rule="evenodd" />
							</svg>
						</button>

						<!-- Mobile dropdown content -->
						<div v-if="openMobileDropdowns[item.name]" class="pl-4 mt-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
							<NuxtLink
								v-for="child in item.children"
								:key="child.id"
								:to="child.path"
								class="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center"
								@click="toggleMenu">
								<!-- <i v-if="child.icon" :class="[child.icon, 'mr-2 text-sm']"></i> -->
								{{ child.name }}
							</NuxtLink>
						</div>
					</div>
				</div>

				<div class="h-px my-4 bg-gray-200 dark:bg-gray-700"></div>

				<!-- Mobile CTA buttons -->
				<NuxtLink to="/demo" class="block py-3 px-4 mb-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-700" @click="toggleMenu">
					Donate
				</NuxtLink>
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<div v-if="isMobileMenuOpen" @click="toggleMenu" class="fixed inset-0 transition-opacity duration-300 bg-black bg-opacity-50 lg:hidden"></div>
	</nav>
</template>

<style scoped></style>
