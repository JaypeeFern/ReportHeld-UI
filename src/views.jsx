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
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SchemaIcon from '@mui/icons-material/Schema';

export const views = {
	sites: {
		name: 'Sites',
		icon:  <LocationOnIcon fontSize='large'/>,
		path: 'sites',
		borderBottom: true,
		radiusTr: true,
		radiusBr: false,
		hidden: false
	},
	powerplants: {
		name: 'Power Plants',
		icon: <BoltIcon fontSize='large'/>,
		path: 'powerplants',
		borderBottom: true,
		hidden: false
	},
	powerplantfeatures: {
		name: 'Power Plant Features',
		icon: <GroupWorkIcon fontSize='large'/>,
		path: 'features',
		borderBottom: true,
		hidden: false
	},
	protocols: {
		name: 'Protocols',
		icon: <ChecklistIcon fontSize='large'/>,
		path: 'protocols',
		borderBottom: true,
		hidden: false
	},
	templateeditor: {
		name: 'Template Editor',
		icon: <FormatSizeOutlinedIcon fontSize='large'/>,
		path: 'templates',
		borderBottom: true,
		hidden: false
	},
	variants: {
		name: 'Variants',
		icon: <AltRouteOutlinedIcon fontSize='large'/>,
		path: 'variants',
		borderBottom: true,
		hidden: false
	},
	typedefinitions: {
		name: 'Type Definitions',
		icon: <SchemaIcon fontSize='large'/>,
		path: 'definitions',
		borderBottom: true,
		hidden: false
	},
	users: {
		name: 'Users',
		icon: <PersonAddIcon fontSize='large'/>,
		path: 'users',
		borderBottom: true,
		hidden: false
	},
	groups: {
		name: 'Groups',
		icon: <GroupIcon fontSize='large'/>,
		path: 'groups',
		borderBottom: true,
		hidden: false,
		radiusTr: false,
		radiusBr: true,
	},
	feedback: {
		name: 'Feedback',
		icon: <FeedbackIcon fontSize='large'/>,
		path: 'feedback',
		borderBottom: true,
		hidden: true
	},
	feedBackResults: {
		name: 'Feedback Results',
		icon: <QuestionAnswerIcon fontSize='large'/>,
		path: 'feedback-results',
		borderBottom: true,
		hidden: true
	},
	profile: {
		name: 'Profile',
		icon: <AccountCircleIcon fontSize='large'/>,
		path: 'profile',
		borderBottom: true,
		radiusTr: false,
		radiusBr: true,
		hidden: true
	}
};
