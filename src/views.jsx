import BoltIcon from '@mui/icons-material/Bolt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import FeedbackIcon from '@mui/icons-material/Feedback';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

export const views = {
	sites: {
		name: 'Sites',
		icon:  <LocationOnIcon fontSize='large'/>,
		path: 'sites',
		borderBottom: true,
		radiusTr: true,
		radiusBr: false
	},
	powerplants: {
		name: 'Power Plants',
		icon: <BoltIcon fontSize='large'/>,
		path: 'powerplants',
		borderBottom: true
	},
	powerplantfeatures: {
		name: 'Power Plant Features',
		icon: <QuestionMarkOutlinedIcon fontSize='large'/>,
		path: 'features',
		borderBottom: true
	},
	protocols: {
		name: 'Protocols',
		icon: <ChecklistIcon fontSize='large'/>,
		path: 'protocols',
		borderBottom: true
	},
	templateeditor: {
		name: 'Template Editor',
		icon: <FormatSizeOutlinedIcon fontSize='large'/>,
		path: 'templates',
		borderBottom: true
	},
	variants: {
		name: 'Variants',
		icon: <AltRouteOutlinedIcon fontSize='large'/>,
		path: 'variants',
		borderBottom: true
	},
	typedefinitions: {
		name: 'Type Definitions',
		icon: <QuestionMarkOutlinedIcon fontSize='large'/>,
		path: 'definitions',
		borderBottom: true
	},
	users: {
		name: 'Users',
		icon: <PersonAddIcon fontSize='large'/>,
		path: 'users',
		borderBottom: true
	},
	groups: {
		name: 'Groups',
		icon: <GroupIcon fontSize='large'/>,
		path: 'groups',
		borderBottom: true
	},
	feedback: {
		name: 'Feedback',
		icon: <FeedbackIcon fontSize='large'/>,
		path: 'feedback',
		borderBottom: true
	},
	feedBackResults: {
		name: 'Feedback Results',
		icon: <QuestionAnswerIcon fontSize='large'/>,
		path: 'feedback-results',
		borderBottom: true
	},
	profile: {
		name: 'Profile',
		icon: <AccountCircleIcon fontSize='large'/>,
		path: 'profile',
		borderBottom: true,
		radiusTr: false,
		radiusBr: true
	}
};
