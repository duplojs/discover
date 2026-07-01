export interface LandingAction {
	label: string;
	href: string;
	variant: "primary" | "secondary";
}

export interface LandingLink {
	label: string;
	href: string;
	icon?: string;
}

export interface LandingHeaderContent {
	logoAlt: string;
	nav: LandingLink[];
	socials: LandingLink[];
}

export interface LandingPackage {
	name: string;
	label: string;
	description: string;
}

export interface LandingMetric {
	value: string;
	label: string;
}

export interface LandingHeroContent {
	kicker: string;
	titleLines: string[];
	description: string;
	proof: string;
	actions: LandingAction[];
	metrics: LandingMetric[];
	packages: LandingPackage[];
}
